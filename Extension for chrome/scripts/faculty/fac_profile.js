document.getElementsByTagName('form')[0].style.display = "none";
var f = document.getElementsByTagName('form')[0];
var form = document.createElement("form");
form.setAttribute("name","facprofile");
form.setAttribute("class","form-wrapper cf");
var table = document.createElement("table");
table.setAttribute("cellpadding","1");
table.setAttribute("cellspacing","1");
table.setAttribute("border","0");
table.setAttribute("height","40");
table.setAttribute("width","750");
var tbo = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");
td.setAttribute("width","205");
td.setAttribute("height","10");
var b = document.createElement("b");
var t = document.createTextNode("");
var td1 = document.createElement("td");
td1.setAttribute("height","10");
var b1 = document.createElement("b");
var t1 = document.createTextNode("");

var inp = document.createElement("input");
inp.setAttribute("type","text");
//inp.setAttribute("class","textbox2");
inp.setAttribute("name","faculty");
inp.setAttribute("maxlength","30");
inp.setAttribute("size","30");
inp.setAttribute("tabindex","1");

var inp1 = document.createElement("input");
inp1.setAttribute("type","button");
//inp1.setAttribute("class","submit3");
inp1.setAttribute("value","Search");
inp1.setAttribute("onclick","showfaculty()");
inp1.setAttribute("tabindex","1");


b1.appendChild(t1);
td1.appendChild(b1);
td1.appendChild(inp);
td1.appendChild(inp1);

b.appendChild(t);
td.appendChild(b);
tr.appendChild(td);
tr.appendChild(td1);
tbo.appendChild(tr);
table.appendChild(tbo);
form.appendChild(inp);
form.appendChild(inp1);
f.parentElement.insertBefore(form, f);