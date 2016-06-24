subject_name = "";
teacher_name = "";

chrome.runtime.onMessage.addListener(function(request, sender, response){
    switch (request.type) {
        case "rename":
            rename(request);
            break;
        case "notifications":
            notify(request);
            break;
    }
});

var notify = function(data){
    var options = {
        "title" :   "Marks Change Notification",
        "type"  :   "list",
        "iconUrl"   :   chrome.extension.getURL('github-logo.png'),
        "message"   :   "Following marks have been changed.",
        "items" :   data.list
    };
    chrome.notifications.create(options);
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
    suggest({filename: "VIT Downloads"+ "/" + subject_name + "/" + teacher_name + "/" + item.filename.split("_").slice(4).join("_")});
    console.log(getLocation(item.url).hostname);
  }

});
