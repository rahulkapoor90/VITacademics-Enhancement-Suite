chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  
  var regex = /(FALL|WIN|SUM){1}SEM[0-9]{4}-[0-9]{2}_CP[0-9]{4}.*_[A-Z]{2,4}[0-9]{2}_/;
  var text = item.filename; 
  var label;
  
  if (regex.test(text)){
    label = text.split(regex.exec(text)[0])[1];
    suggest({filename:label, 
            conflict_action: 'overwrite',
            conflictAction: 'overwrite'});
  }
  
  suggest({filename:text, 
          conflict_action: 'overwrite',
          conflictAction: 'overwrite'});
    
});