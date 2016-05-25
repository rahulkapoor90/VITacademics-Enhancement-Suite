chrome.browserAction.onClicked.addListener(function (tab){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {Req: "Start init"}, function(response) {
            console.log(processReq(response));
        });
    });
});

function processReq(obj){
    if(obj.Req == "Download links"){
        console.log(obj.Links);
        down(obj.Links);
    }
}

function down(links){
    var obj={url:"", filename:'Course/', conflictAction:"uniquify" }
    for(var i=0; i<links.length; i++){
        var tmp = Object.assign({}, obj);
        tmp.url = links[i].href;
        if(links[i].name==""){
            tmp.filename += i.toString();
        }
        else{
            tmp.filename += links[i].name;
        }
        console.log(tmp);
        chrome.downloads.download(tmp, cb);
    }
}

function cb(id){
    console.log(id);
}

/*
chrome.runtime.onMessage.addListener(function(request, sender, response){
        if(request.Req == "Download links"){
            console.log(request.Links);
        }
})
*/
