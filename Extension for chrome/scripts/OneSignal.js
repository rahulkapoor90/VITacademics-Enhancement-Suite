/**
 * Modified MIT License
 * 
 * Copyright 2015 OneSignal
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * 1. The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * 2. All copies of substantial portions of the Software may only be used in connection
 * with services provided by OneSignal.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
 
 
// Requires Chrome version 35+


// Google's buy.js START:
(function() { var f=this,g=function(a,d){var c=a.split("."),b=window||f;c[0]in b||!b.execScript||b.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===d?b=b[e]?b[e]:b[e]={}:b[e]=d};var h=function(a){var d=chrome.runtime.connect("nmmhkkegccagdldgiimedpiccmgmieda",{}),c=!1;d.onMessage.addListener(function(b){c=!0;"response"in b&&!("errorType"in b.response)?a.success&&a.success(b):a.failure&&a.failure(b)});d.onDisconnect.addListener(function(){!c&&a.failure&&a.failure({request:{},response:{errorType:"INTERNAL_SERVER_ERROR"}})});d.postMessage(a)};g("google.payments.inapp.buy",function(a){a.method="buy";h(a)});
g("google.payments.inapp.getPurchases",function(a){a.method="getPurchases";h(a)});g("google.payments.inapp.getSkuDetails",function(a){a.method="getSkuDetails";h(a)}); })(); 
// END

var ONESIGNAL_LOGGING = false;
var ONESIGNAL_VERSION = 10102;
var ONESIGNAL_HOST_URL = "https://onesignal.com/api/v1/";

var OneSignal_Init_done = false;

var tagsToSendOnRegister = null;

var OneSignal_ids_available_port = null;
var OneSignal_current_skus = null;

var OneSignal = {
  log: function(message) {
    if (ONESIGNAL_LOGGING)
      console.log(message);
  },
  
  sendToOneSignalApi: function(url, action, inData, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onerror = function() {
      OneSignal.log("Error connecting to OneSignal servers:" + url)
    }
    xhr.onload = function() {
      if (callback != null)
        callback(xhr.response);
    }
  
    xhr.open(action, ONESIGNAL_HOST_URL + url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(inData));
  },
  
  getUserId: function(callback) {
  if (typeof chrome.identity != "undefined")
    chrome.identity.getProfileUserInfo(function (userInfo) {
      callback(userInfo.id);
    });
  else
    callback(null);
  },
  
  registerWithOneSignal: function(appId, registrationId) {
    chrome.storage.local.get("gt_player_id", function(result) {
      var requestUrl = 'players';
      if (result["gt_player_id"] != null)
        requestUrl = 'players/' + result["gt_player_id"] + '/on_session';
      
      OneSignal.getUserId(function(userId) {
        var jsonData = {app_id: appId,
                device_type: 4,
                identifier: registrationId,
                language: chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage().substring(0, 2) : 'en',
                timezone: (new Date().getTimezoneOffset() * -60),
                device_model: navigator.platform + " Chrome",
                device_os: navigator.appVersion.match(/Chrome\/(.*?) /)[1],
                sdk: ONESIGNAL_VERSION};
        
        if (userId != null)
          jsonData["ad_id"] = userId;
        
        OneSignal.sendToOneSignalApi(requestUrl, 'POST', jsonData,
          function registeredCallback(response) {
            var responseJSON = JSON.parse(response);
            chrome.storage.local.set({gt_player_id: responseJSON.id});
            
            OneSignal.GT_sendPurchases(result["gt_player_id"] == null);
            
            if (tagsToSendOnRegister != null)
              OneSignal.sendTags(tagsToSendOnRegister);
            if (OneSignal_ids_available_port != null)
              OneSignal_ids_available_port.postMessage({userId: result["gt_player_id"], registrationId: responseJSON.id});
          }
        );
      });
    });
  },
  
  GT_internal_init: function(appId, googleProjectNumber) {
    var afterRegister = function(registrationId) {
      if (registrationId) {
        OneSignal.log("Registered with GCM:");
        OneSignal.log(registrationId);
        chrome.storage.local.set({gt_registration_id: registrationId});
      }
      else {
        OneSignal.log("Error registering with GCM:")
        OneSignal.log(runtime.lastError)
      }
      OneSignal.registerWithOneSignal(appId, registrationId);
    }
    
    if (OneSignal_Init_done == false) {
      chrome.storage.local.set({gt_app_id: appId, gt_google_project_number: googleProjectNumber});
      OneSignalBackground.init();
      chrome.gcm.register([googleProjectNumber], afterRegister);
    }
    else {
      chrome.storage.local.get("gt_registration_id", function(result) {
        OneSignal.registerWithOneSignal(appId, result["gt_registration_id"]);
      });
    }
      
    OneSignal_Init_done = true;
  },
  
  // Must call init from your Chrome App background script.
  init: function(options) {
    OneSignal.GT_internal_init(options.appId, options.googleProjectNumber);
  },
  
  appLaunched: function() {
    chrome.storage.local.get({"gt_app_id": null, "gt_google_project_number": null}, function(result) {
    OneSignal.GT_internal_init(result["gt_app_id"], result["gt_google_project_number"]);
    });
  },
  
  getSkus: function(callback) {
    if (OneSignal_current_skus == null) {
      google.payments.inapp.getSkuDetails({
        'parameters': {'env': 'prod'},
        'success': function onSkuDetails(response) {
          var products = response.response.details.inAppProducts;
          var count = products.length;
          OneSignal_current_skus = {};
          for (var i = 0; i < count; i++) {
          OneSignal_current_skus[products[i].sku] = products[i];
          }
          callback();
         },
        'failure': function(error) {}
      });
    }
    else
      callback();
  },
  
  sendPurchases: function() {
    chrome.storage.local.get("gt_player_id", function(result) {
      if (result["gt_player_id"] != null)
        OneSignal.GT_sendPurchases(false);
    });
  },
  
  GT_sendPurchases: function(existing) {
    if (typeof google != "undefined" && typeof google.payments != "undefined") {
      OneSignal.getSkus(function() {
        google.payments.inapp.getPurchases({
        'parameters': {env: "prod"},
        'success': function(response) {
          var licenses = response.response.details;
          var count = licenses.length;
          var currentPurchases = [];
          for (var i = 0; i < count; i++) {
            if (licenses[i].state == "ACTIVE")
            currentPurchases.push(licenses[i].sku);
          }
          
          chrome.storage.local.get({"gt_sent_purchases": null, "gt_app_id": null, "gt_player_id": null}, function(result) {
            var newPurchases = [];
            if (result["gt_sent_purchases"] != null) {
              var count = currentPurchases.length;
              for (var i = 0; i < count; i++) {
                if (result["gt_sent_purchases"].indexOf(currentPurchases[i]) == -1)
                newPurchases.push(currentPurchases[i]);
              }
              if (newPurchases.length == 0)
                return;
            }
            else
              newPurchases = currentPurchases;
            
            var count = newPurchases.length;
            var jsonPurchases = [];
            var purchasedItem;
            for (var i = 0; i < count; i++) {
              purchasedItem = OneSignal_current_skus[newPurchases[i]];
              if (purchasedItem != null)
              jsonPurchases.push({sku: purchasedItem.sku, iso: purchasedItem.prices[0].currencyCode, amount: purchasedItem.prices[0].valueMicros / 1000000});
            }
            
            var jsonData = {app_id: result["gt_app_id"],
                            purchases: jsonPurchases};
            if (existing)
              jsonData.existing = existing;
            OneSignal.sendToOneSignalApi("players/" + result["gt_player_id"] + "/on_purchase", 'POST', jsonData,
              function registeredCallback(response) {
                var responseJSON = JSON.parse(response);
                if (responseJSON.success == true) {
                  if (result["gt_sent_purchases"] == null)
                    result["gt_sent_purchases"] = [];
                  result["gt_sent_purchases"] = result["gt_sent_purchases"].concat(newPurchases);
                  chrome.storage.local.set({gt_sent_purchases: result["gt_sent_purchases"]});
                }
              }
            );
          });
        },
        'failure': function(error) {}
        });
      });
    }
  },
  
  sendTag: function(key, value) {
    jsonKeyValue = {};
    jsonKeyValue[key] = value;
    OneSignal.sendTags(jsonKeyValue);
  },
  
  sendTags: function(jsonPair) {
    chrome.storage.local.get({"gt_player_id": null, "gt_app_id": null}, function(result) {
      if (result["gt_player_id"] != null)
        OneSignal.sendToOneSignalApi("players/" + result["gt_player_id"], "PUT", {app_id: result["gt_app_id"], tags: jsonPair});
      else {
        if (tagsToSendOnRegister == null)
          tagsToSendOnRegister = jsonPair;
        else  
          tagsToSendOnRegister = tagsToSendOnRegister.concat(jsonPair);
      }
    });
  },
  
  deleteTag: function(key) {
    OneSignal.deleteTags([key]);
  },
  
  deleteTags: function(keyArray) {
    var jsonPair = {};
    var length = keyArray.length;
    for (var i = 0; i < length; i++)
      jsonPair[keyArray[i]] = "";
    
    OneSignal.sendTags(jsonPair);
  },
  
  addListenerForNotificationOpened: function(callback) {
    var port = chrome.runtime.connect({name: "ONESIGNAL_NOTIFICATION_OPENED"});
    port.onMessage.addListener(function(msg) {
      callback(msg);
    });
  },
  
  getIdsAvailable: function(callback) {
    chrome.storage.local.get({"gt_player_id": null, "gt_registration_id": null}, function(result) {
      if (result["gt_player_id"] != null)
        callback({userId: result["gt_player_id"], registrationId: result["gt_registration_id"]});  
      if (result["gt_registration_id"] != null) {
        var port = chrome.runtime.connect({name: "GT_IDS_AVAILABLE"});
        port.onMessage.addListener(function(msg) {
          callback(msg);
        });
      }
    });
  },
  
  getTags: function(callback) {
    chrome.storage.local.get("gt_player_id", function(result) {
      if (result["gt_player_id"] != null) {
        OneSignal.sendToOneSignalApi("players/" + result["gt_player_id"], 'GET', {},
          function registeredCallback(response) {
          callback(JSON.parse(response).tags);
          }
        );
      }
    });
  }
};

chrome.runtime.onConnect.addListener(function(port) {
  if (port.name == "GT_IDS_AVAILABLE")
      OneSignal_ids_available_port = port;
});





var GT_notifications_opened = [];
var GT_notifications_received = {};

var ONESIGNAL_NOTIFICATION_OPENED_port = null;

var OneSignalBackground = {
  
  init: function() {
    chrome.gcm.onMessage.addListener(OneSignalBackground.onMessageReceived);
    chrome.notifications.onClicked.addListener(OneSignalBackground.notification_onClicked);
    chrome.notifications.onButtonClicked.addListener(OneSignalBackground.notifiation_buttonClicked);
    if (chrome.app.runtime)
      chrome.app.runtime.onLaunched.addListener(OneSignal.appLaunched);
    
    chrome.runtime.onConnect.addListener(function(port) {
      if (port.name == "ONESIGNAL_NOTIFICATION_OPENED")
        ONESIGNAL_NOTIFICATION_OPENED_port = port;
    });
  },
  
  onMessageReceived: function(message) {
    var title = message.data.title;
    if (title == null)
      title = chrome.runtime.getManifest().name;
    
    var iconUrl = message.data.icon;
    if (message.data.icon == null) {
      var icons = chrome.runtime.getManifest().icons;
      iconUrl = icons["128"];
      if (iconUrl == null) {
      iconUrl = icons["48"];
      if (iconUrl == null)
        iconUrl = icons["16"];
      }
    }
    
    var customJSON = JSON.parse(message.data.custom);
      
    GT_notifications_received[customJSON.i] = {
      title: title,
      icon: iconUrl,
      message: message.data.alert,
      additionalData: customJSON.a
    };
    
    var chromeNotification = {
        title: title,
        iconUrl: iconUrl,
        type: 'basic',
        message: message.data.alert
      };
    
    if (message.data.bicon != null) {
      chromeNotification.type = "image";
      chromeNotification.imageUrl = message.data.bicon;
    }
    
    if (message.data.o != null) {
      var sActionButtons = JSON.parse(message.data.o);
      if (customJSON.a == null)
        customJSON.a = {};
      
      var count = sActionButtons.length;
      var actionButtons = [];
      chromeNotification.buttons = [];
      for (var i = 0; i < count; i++) {
        var aButton = {id: sActionButtons[i].i, text: sActionButtons[i].n};
        if (sActionButtons[i].i == null)
          aButton.id = aButton.text;
        
        if (sActionButtons[i].p != null)
          aButton.icon = sActionButtons[i].p;
        
        actionButtons.push(aButton);
        chromeNotification.buttons.push({title: aButton.text, iconUrl: aButton.icon});
      }
      
      GT_notifications_received[customJSON.i].actionButtons = actionButtons;
    }
    
    if (customJSON.u != null)
      GT_notifications_received[customJSON.i].openUrl = customJSON.u;
    
    chrome.notifications.create(customJSON.i, chromeNotification, function(){});
  },
  
  notificationOpened: function(notifiationId, jsonToSend) {
    chrome.notifications.clear(notifiationId, function(){});
    if (GT_notifications_opened.indexOf(notifiationId) > -1)
      return false;
    
    GT_notifications_opened.push(notifiationId);
    
    if (ONESIGNAL_NOTIFICATION_OPENED_port != null) {
      try { // Port may have closed
        ONESIGNAL_NOTIFICATION_OPENED_port.postMessage(jsonToSend);
      } catch(err) {}
    }
    
    chrome.storage.local.get({"gt_player_id": null, "gt_app_id": null}, function(result) {
      OneSignal.sendToOneSignalApi("notifications/" + notifiationId, "PUT",
        {app_id: result["gt_app_id"], player_id: result["gt_player_id"], opened: true});
    });
    
    if (GT_notifications_received[notifiationId].openUrl != null) {
      var urlObject = {url: GT_notifications_received[notifiationId].openUrl};
      if (chrome.browser)
        chrome.browser.openTab(urlObject);
      else
        chrome.tabs.create(urlObject);
    }
    
    return true;
  },
  
  notification_onClicked: function(notifiationId) {
    if (OneSignalBackground.notificationOpened(notifiationId, GT_notifications_received[notifiationId]))
      GT_notifications_received[notifiationId] = null;
  },
  
  notifiation_buttonClicked: function(notifiationId, buttonIndex) {
    var notificationData = GT_notifications_received[notifiationId];
    notificationData.actionSelected = GT_notifications_received[notifiationId].actionButtons[buttonIndex].id;
    if (OneSignalBackground.notificationOpened(notifiationId, notificationData))
      GT_notifications_received[notifiationId] = null;
  }
};