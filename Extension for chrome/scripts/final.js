var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://res.cloudinary.com/dadfowug4/image/upload/v1479304973/favicon_rkdd0w.ico';
    document.getElementsByTagName('head')[0].appendChild(link);

document.getElementsByTagName('head')[0].appendChild(link);
//hide the upper part and the default side links
document.getElementsByTagName('table')[0].style.display = "none";
document.getElementsByTagName('table')[2].style.display = "none";


// make custom header
var nav = document.getElementsByTagName('table')[0];
var div1 = document.createElement("table");
div1.setAttribute("width", "100%");
div1.setAttribute("height", "15%");
div1.setAttribute("border", "0");
div1.setAttribute("id", "navbar");
div1.setAttribute("align", "center");
div1.setAttribute("cellpadding", "0");
div1.setAttribute("cellspacing", "0");
div1.setAttribute("background","https://vit.ac.in/images/banner_bg3.png");
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
var t1 = document.createTextNode("VTOP | VIT University");
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
//end custom header

var tab = document.getElementsByTagName('table')[3];
var tabl = document.createElement("table");
tabl.setAttribute("height", "180");
tabl.setAttribute("width", "204");
tabl.setAttribute("border", "0");
tabl.setAttribute("cellpadding", "0");
//tabl.setAttribute("background", "images/back_ground.jpg");
tabl.setAttribute("style", "border-collapse: collapse");

var tbo = document.createElement("tbody");
var tr = document.createElement("tr");
var tad = document.createElement("td");
tad.setAttribute("align","center");
var hr = document.createElement("a");
hr.setAttribute("href","https://vtop.vit.ac.in/student/stud_login.asp");
//hr.setAttribute("target","_blank");
var im = document.createElement("img");
im.setAttribute("border","0");
im.setAttribute("src","https://res.cloudinary.com/dadfowug4/image/upload/v1479304581/studentlogin_fnj4ah.png");
//im.setAttribute("width","178");
//im.setAttribute("height","35");

var tr1 = document.createElement("tr");
var tad1 = document.createElement("td");
tad1.setAttribute("align","center");
var hr1 = document.createElement("a");
hr1.setAttribute("href","https://vtop.vit.ac.in/parent/parent_login.asp");
//hr1.setAttribute("target","_blank");
var im1 = document.createElement("img");
im1.setAttribute("border","0");
im1.setAttribute("src","https://res.cloudinary.com/dadfowug4/image/upload/v1479304581/parentlogin_g2u4re.png");
//im1.setAttribute("width","178");
//im1.setAttribute("height","35");


var tr2 = document.createElement("tr");
var tad2 = document.createElement("td");
tad2.setAttribute("align","center");
var hr2 = document.createElement("a");
hr2.setAttribute("href","https://vtop.vit.ac.in/faculty/fac_login.asp");
//hr2.setAttribute("target","_blank");
var im2 = document.createElement("img");
im2.setAttribute("border","0");
im2.setAttribute("src","https://res.cloudinary.com/dadfowug4/image/upload/v1479304581/facultylogin_nojusn.png");

hr1.appendChild(im1);
tad1.appendChild(hr1);
tr1.appendChild(tad1);

hr2.appendChild(im2);
tad2.appendChild(hr2);
tr2.appendChild(tad2);

hr.appendChild(im);
tad.appendChild(hr);
tr.appendChild(tad);

tbo.appendChild(tr2);
tbo.appendChild(tr);
tbo.appendChild(tr1);

tabl.appendChild(tbo);

tab.parentElement.insertBefore(tabl, tab);
