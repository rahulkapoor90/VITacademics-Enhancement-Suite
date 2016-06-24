// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 **/
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // renderStatus(url); // Shows "undefined", because chrome.tabs.query is async.
}

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */

function logout()
{
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","http://phc.prontonetworks.com/cgi-bin/authlogout",true);
    xmlhttp.send();
     xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
var patt1 = new RegExp(/successfully logged out/i);
var res1 = patt1.test(xmlhttp.responseText);
if(res1)
{
  renderHtml('<h4>Logout Successful</h4>');
}

else if(!res1)
{
  renderStatus('<h4>Logout failure.</h4>');
}
}
    }
}

function update()
{
  renderHtml('<h2>Save Credentials</h2><form><div class="form-group"><input type="text" class="form-control" id="username" placeholder="Username"></div><div class="form-group"><input type="password" class="form-control" id="password" placeholder="Password"></div><div class="form-group"><button id="save" style="float:right;margin-bottom:10px;" class="btn btn-info">Save</button></div></form>');
  document.getElementById('save').addEventListener('click',save_options);
}

function login() {
  var xmlhttp = new XMLHttpRequest();
  chrome.storage.sync.get({
    username : "",
    password: ""
  }, function(items) {
     var username = items.username;
    var password = items.password;
    // return;
    if(username=='')
  {
    //window.renderStatus('Please save username, password from options in extensions page.');
    //window.renderHtml('<input type="text" id="username" placeholder="Username"><input type="password" id="password" placeholder="Password"><div id="status"></div><br><button id="save">Save</button>');
    return;
  }
  else
  {
    renderHtml("<h4>Logging in as " +username + "</h4>");
    xmlhttp.open("POST","http://phc.prontonetworks.com/cgi-bin/authlogin",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("userId="+username+"&password="+password+"&serviceName=ProntoAuthentication&Submit22=Login");

    xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
var patt1 = new RegExp(/Congratulations/i);
var patt2 = new RegExp(/already logged/i);
var patt3 = new RegExp(/quota is over/i);

var res1 = patt1.test(xmlhttp.responseText);
var res2 = patt2.test(xmlhttp.responseText);
var res3 = patt3.test(xmlhttp.responseText);
if(res1)
{
  renderHtml('<h4>Login Successful</h4>');
}
if(res2)
{
  renderHtml('<h4>Already logged in</h4><button class="btn btn-info pull-left btn-sm" id="update-button" style="margin-bottom:10px;">Update</button><button class="btn btn-danger btn-sm pull-right" id="logout-button" style="margin-bottom:10px;">Logout</button>');
  document.getElementById('logout-button').addEventListener('click',logout);
  document.getElementById('update-button').addEventListener('click',update);
}
if(res3)
{
  renderHtml('<h4>Access Quota Over</h4> <button class="btn btn-info btn-sm pull-right" id="update-button" style="margin-bottom:10px;">Update</button>');
  document.getElementById('update-button').addEventListener('click',update);
}
else if(!res1 && !res2 && !res3)
{
  renderHtml('<h4>Login Failure</h4> <button class="btn btn-info btn-sm pull-right" id="update-button" style="margin-bottom:10px;">Update</button>');
  document.getElementById('update-button').addEventListener('click',update);
}
}
    }
  }

  });
}

function renderStatus(statusText) {
  document.getElementById('content').textContent = statusText;
}

function renderHtml(markup) {
  document.getElementById('content').innerHTML = markup;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    // Put the image URL in Google search.
    //renderStatus('Logging you In ' + url);

    login();
  });
});