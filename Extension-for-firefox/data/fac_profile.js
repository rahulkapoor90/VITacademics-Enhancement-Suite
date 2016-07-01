var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", "resource://vit-academics-enhancement-suite/content/skin/fac_profile.css");
document.getElementsByTagName("head")[0].appendChild(fileref);

document.getElementsByName('faculty')[0].style="text-transform:none;";
var info = document.getElementsByName('faculty')[0];
    var para = document.createElement("p");
    var t = document.createTextNode("TIP: List of faculties will automatically appear as you start typing!");
    para.setAttribute("id", "info-msg"); 
    para.appendChild(t);
    info.parentElement.appendChild(para);
document.getElementsByName('faculty')[0].onkeypress = function(e) {
    if(e.keyCode == 13) {
       
    }
}

    var elem = document.getElementsByName('faculty')[0];

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', 0);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(0, 0);
            }
            else
                elem.focus();
        }
    }