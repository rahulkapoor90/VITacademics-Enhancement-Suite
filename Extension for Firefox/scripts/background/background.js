function audioNotification(){
    var yourSound = new Audio('audio/notification.mp3');
    yourSound.play();
}
chrome.runtime.setUninstallURL('https://rahulkapoor90.github.io/vitacademics-enhancement-suite/uninstall/');
chrome.runtime.onInstalled.addListener(function(details){
      if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        audioNotification();
        var opt = {
          type: "basic",
          title: "Hello Friend!",
          message: "Fall Semester Results are out! Just a heads up.",
          iconUrl: chrome.extension.getURL('images/github-logo.png')
        }
            chrome.notifications.create(opt);
    }
});

function install_notice() {
    if (localStorage.getItem('install_time'))
        return;

    var now = new Date().getTime();
    localStorage.setItem('install_time', now);
    chrome.tabs.create({url: "http://rahulkapoor90.github.io/vitacademics-enhancement-suite/thanks"});
var opt = {
  type: "basic",
  title: "Hello Friend!",
  message: "Thank You for installing VITacademics Enhancement Suite.",
  iconUrl: chrome.extension.getURL('images/github-logo.png')
}
    audioNotification();
    chrome.notifications.create(opt);
}
var notify1 = function(data){
    var options = {
        "title" :   "Marks Change Notification",
        "type"  :   "basic",
        "iconUrl"   :   chrome.extension.getURL('images/github-logo.png'),
        "message"   :   "Following marks have been changed."
    };
    chrome.notifications.create(options);
}
install_notice();
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        switch (details.url) {
            case "https://vtop.vit.ac.in/student/images/round_orange.gif":
                return {redirectUrl: "https://res.cloudinary.com/dadfowug4/image/upload/v1479314802/nAnJHcz_kt2did.png" };
            case "https://vtop.vit.ac.in/student/images/round_blue.gif":
                return {redirectUrl: "https://res.cloudinary.com/dadfowug4/image/upload/v1479314802/YFcV4bO_oppp1h.png" };
        }
    },
    {urls: ["*://*.vit.ac.in/*.gif"]},
    ["blocking"]);
