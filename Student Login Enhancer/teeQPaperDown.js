/*var d=document.getElementsByTagName('input');
var e=[];
for(var i=0;i<d.length;i++){
if(d[i].getAttribute('type')=='submit'){e.push(d[i])}
}
var i=0;
setInterval(function(){e[i++].click();console.log(i);},10000);
*/
/*OR*/
function main() {
    chrome.runtime.onMessage.addListener(
        function(request,sender,response){
            if(request.Req=="Start init"){
                init();
            }
        });
    }
//  Works only on optimal server response and good network connectivity
function init(){
    console.log('TEE QPaper Downloader Started!');
    var i=1;//first form is the main course selector
    var t=document.forms;
    /*for(var i=1;i<t.length;i++){
        t[i].setAttribute("target","_blank");
        t[i].submit()
    }*/
    var loop = setInterval(function(){
        t[i++].submit();
        console.log(i);
        if(i==t.length){
            clearInterval(loop);
        }
    },10000);
}
onload=main();
