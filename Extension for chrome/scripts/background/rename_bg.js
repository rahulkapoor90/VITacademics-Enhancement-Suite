subject_name = "";
teacher_name = "";
var counter=0, notID="", tInd=0;
chrome.runtime.onMessage.addListener(function(request, sender, response){
    switch (request.type) {
        case "rename":
            rename(request);
            break;
        case "notifications":
            notID=""
            if(request.nMsg){
                notID="M"+(++counter);
            }
            tInd=sender.tab.index+1;
            chrome.notifications.create(notID, request.options);
            break;
        case "logout":
            logout(request);
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.msg == "date") {
        //Notification if the deadline is within 2 days
        var data = request.data;
        for (i = 0; i < data.length; i++) {
            var message = "SUBJECT  :   " + data[i].crsnm + "  -   " + data[i].crstp + "\nTITLE  :  " + data[i].title + "\nDATE  :  " + data[i].duedate;
            var options = {
                type: "basic",
                title: "Assignment Alert",
                message: message,
                iconUrl:  chrome.extension.getURL('images/github-logo.png')
            }
            chrome.notifications.create(options);
        }
    }
    if (request.msg == "new") {
        var data = request.data;
        // Notification if new assignment(s) is posted
        for (i = 0; i < data.length; i++) {
            var message = "SUBJECT  :   " + data[i].crsnm + "  -   " + data[i].crstp + "\nTITLE  :  " + data[i].title + "\nDATE  :  " + data[i].duedate;
            var options = {
                type: "basic",
                title: "New Assignment",
                message: message,
                iconUrl:  chrome.extension.getURL('images/github-logo.png')
            }
            chrome.notifications.create(options);
        }
    }
    if (request.msg == "score") {
        var data = request.data;
        //Notification if marks of any assignment is updated
        for (i = 0; i < data.length; i++) {
            var message = "SUBJECT  :   " + data[i].crsnm + "  -   " + data[i].crstp + "\nTITLE  :  " + data[i].title + "\nDATE  :  " + data[i].duedate + "\nSCORE  : " + data[i].score;
            var options = {
                type: "basic",
                title: "Assignment Marks Updated",
                message: message,
                iconUrl:  chrome.extension.getURL('images/github-logo.png')
            }
            chrome.notifications.create(options);
        }
    }
    if (request.msg == "marks") {
        var data = request.data;
        //Notification if marks of any assignment is updated
        for (i = 0; i < data.length; i++) {
            var message = "SUBJECT  :   " + data[i].name + "\nTITLE  :  " + data[i].title + "\nSCORE  : " + data[i].scored + ' / '+data[i].max+".00";
            var options = {
                type: "basic",
                title: "Marks Updated",
                message: message,
                iconUrl:  chrome.extension.getURL('images/github-logo.png')
            }
            chrome.notifications.create(options);
        }
    }
});

chrome.notifications.onButtonClicked.addListener(function(nID, i){
    if(nID.length==2 && nID[0]=="M"){
        switch (i) {
            case 0:
                chrome.tabs.create({
                    "url"   :   "https://vtop.vit.ac.in/student/class_message_view.asp?sem=FS",
                    "index" :   tInd
                })
                break;
            case 1:
                chrome.notifications.clear(nID);
                break;
        }
    }
    console.log(nID);
    console.log(i);
})
/*
var notify = function(data){
    var options = {
        "title" :   "Marks Change Notification",
        "type"  :   "list",
        "iconUrl"   :   chrome.extension.getURL('images/github-logo.png'),
        "message"   :   "Following marks have been changed.",
        "items" :   data.list
    };
    chrome.notifications.create(options);

}*/
var noti = function(data){
    var opt2 = {
  type: "basic",
  title: "Pronto Wifi Login",
  message: "Hey! You have successfully logged in using VITacademics Enhancement Suite.",
  iconUrl: chrome.extension.getURL('images/github-logo.png')
}
    chrome.notifications.create(opt2);
}
var logout = function(data){
    var opt2 = {
  type: "basic",
  title: "Pronto Wifi Logout",
  message: "Hey! You have successfully Logged out using VITacademics Enhancement Suite.",
  iconUrl: chrome.extension.getURL('images/github-logo.png')
}
    chrome.notifications.create(opt2);
}

var rename = function(data){
          links = data.links;
          subject_name = data.subject;
          teacher_name = data.teacher;

          console.log(links);
          for (i=0; i<links.length; i++)
          // for (filename in links)
          {
            console.log(links[i]);

            chrome.downloads.download
            ({
              url: links[i]
              // filename: "VIT Course Material"+ "/" + subject_name + "/" + teacher_name + "/" + links[i].replace(/^.*[\\\/]/, '')
            });

          }
}

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};


chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  if (getLocation(item.url).hostname == "vtop.vit.ac.in" || getLocation(item.url).hostname == "27.251.102.132")
  {

      if(subject_name && teacher_name){
          suggest({filename: "VIT Downloads"+ "/" + subject_name + "/" + teacher_name + "/" + item.filename});
          console.log(getLocation(item.url).hostname);
      }
      else{
          console.log("Couldn't");
      }
  }

});
