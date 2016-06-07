chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        switch (details.url) {
            case "https://vtop.vit.ac.in/student/images/round_orange.gif":
                return {redirectUrl: "https://i.imgur.com/nAnJHcz.png" };
            case "https://vtop.vit.ac.in/student/images/round_blue.gif":
                return {redirectUrl: "https://i.imgur.com/YFcV4bO.png" };
        }
    },
    {urls: ["*://*.vit.ac.in/*.gif"]},
    ["blocking"]);
