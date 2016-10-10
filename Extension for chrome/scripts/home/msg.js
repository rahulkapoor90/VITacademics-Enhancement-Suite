/*function init() {
    var a=[], o={}, t=[];
    cb = function(i, item){
        if($(item).find('hr').length){
            a.push(Object.assign({}, o));
            t.push(o["Sent On"]);
            return;
        }
        d=$(item).find('td');
        if(d.length > 2 ){
            o[$(d[0]).text().trim()] = $(d[2]).text().trim();
        }
    }
    //  checking for a new Message
    diffMsg = function(data){
        chrome.storage.local.get("VITMsg", function(obj){
            var n=false, d, ind=[];
            Object.keys(obj).length ? d = obj.VITMsg.timeStamps :   n = true;
            if(n){
                return;
            }
            data.timeStamps.forEach(function(val, i){
                if(d.lastIndexOf(val) == -1){
                    ind.push(i);
                }
            });
            console.log(ind);
            notify(data.messages, ind);
        })
    }
    //  send notification message to background
    notify = function(data, ind){
        opt = function(val, i){
            var d = data[val];
            var kk = Object.keys(d);
            var options1 = {
              type: "basic",
              title: "New Message Notification",
              message: kk[0]+":"+d[kk[0]]+"\n"+kk[1]+":"+d[kk[1]],
              iconUrl: chrome.extension.getURL('images/github-logo.png'),
              buttons:  [{ title :   "Read" }, { title :   "Cancel" }]
            }
            chrome.runtime.sendMessage({ "type": "notifications", "options":options1, "nMsg" :true });
        }
        ind.forEach(opt);
    }
    //  store to local storage
    store = function(data){
        chrome.storage.local.set({"VITMsg":data}, function(){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError);
            }
        });
    }
    $($('marquee')[1]).find('tr').each(cb);
    o ={
        "timeStamps"    :   t.slice(),
        "messages"  :   Object.assign({}, a)
    }
    console.log(o);
    diffMsg(o);
    store(o);
}

//  Only for testing.
//  For testing - Change in storage, try running in Extension/background console
var test = function(){
    chrome.storage.local.get("VITMsg", function(obj){
        if(chrome.runtime.lastError){
            console.error(chrome.runtime.lastError);
            return;
        }
        var a = new Date();
        //obj.VITMsg.timeStamps[0] = a.toGMTString();
        obj.VITMsg.timeStamps = [];
        chrome.storage.local.set(obj, function(){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError);
                return;
            }
        });
    })
}

onload = init();
*/
