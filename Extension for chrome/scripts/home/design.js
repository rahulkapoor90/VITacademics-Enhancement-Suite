var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://res.cloudinary.com/dadfowug4/image/upload/v1479304973/favicon_rkdd0w.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
    
document.getElementsByTagName('table')[0].style.display = "none";
var nav = document.getElementsByTagName('table')[0];
var div1 = document.createElement("table");
div1.setAttribute("width", "100%");
div1.setAttribute("height", "15%");
div1.setAttribute("border", "0");
div1.setAttribute("id", "navbar");
div1.setAttribute("align", "center");
div1.setAttribute("cellpading", "0");
div1.setAttribute("cellspacing", "0");
div1.setAttribute("background", "https://vit.ac.in/images/banner_bg3.png");
var div2 = document.createElement("tbody");
var div4 = document.createElement("tr");
var div3 = document.createElement("td");
div3.setAttribute("width", "25%");
div3.setAttribute("align", "left");

var t4 = document.createElement("img");
t4.setAttribute("src", "https://res.cloudinary.com/dadfowug4/image/upload/v1479304837/logo_oqljl1.png");
t4.setAttribute("width", "190");
t4.setAttribute("height", "70");

var td = document.createElement("td");
td.setAttribute("align","center");
var br = document.createElement("br");

var font = document.createElement("font");
font.setAttribute("size","5");
font.setAttribute("color","#FFFFFF");
font.setAttribute("id","parent_link");

var b = document.createElement("p");
var t1 = document.createTextNode("Student Login | VIT University");
b.appendChild(t1);
font.appendChild(b);

td.appendChild(br);
td.appendChild(font);
div3.appendChild(t4);
div4.appendChild(div3);
div4.appendChild(td);
div2.appendChild(div4);
div1.appendChild(div2);

nav.parentElement.insertBefore(div1, nav);
