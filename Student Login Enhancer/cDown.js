onload= main();

function main() {
    chrome.runtime.onMessage.addListener(
        function(request,sender,response){
            if(request.Req=="Start init"){
                init(response);
                return true;
            }
        });
    }
/*
//  To find and filter links, and send those to Background Script.
function init(cb){
    var links=[], obj={} ;
    var d=document.getElementsByTagName('a');
    for(var i=0;i<d.length;i++){
        if(d[i].href.toLowerCase().includes('courseplan_file')){
            links.push({name:"", href:d[i].href});
        }
    }
    var obj = {"Req":"Download links", "Links":links}
    cb(obj);
}
/*
function sendLinks(obj){
    chrome.runtime.sendMessage(, function(response){
        console.log(response);
    })
}*/

//  function to generate click event on anchor links with specific href.
function init(){
    console.log('Course Page Material Downloader Started!');
    var d=document.getElementsByTagName('a');
    function open(link,text){
        var a = document.createElement('a');
        a.href = link;
        a.download=text;
        var evt = document.createEvent("MouseEvents");
        //the tenth parameter of initMouseEvent sets ctrl key
        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
        true, false, false, false, 0, null);
        a.dispatchEvent(evt);
    }
    for(var i=0;i<d.length;i++){
        if(d[i].href.toLowerCase().includes('courseplan_file')){
            open(d[i],d[i].innerText.trim());
        }
    }
}
