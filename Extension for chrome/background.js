chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "https://github.com/rahulkapoor90/VITacademics-Enhancement-Suite"}, function (tab) {
        console.log("New tab launched.");
    });
});