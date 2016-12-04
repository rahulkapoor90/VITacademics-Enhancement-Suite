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
        case "opt":
            noti(request);
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
