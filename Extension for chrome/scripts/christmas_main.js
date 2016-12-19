(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-73159092-1', 'auto');
    ga('send', 'pageview');

/*<div id="fb-root"></div>*/
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=816799638452497";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var body = document.getElementsByTagName('body')[0];
var fbroot = document.createElement("div");
fbroot.setAttribute("id","fb-root");
body.parentElement.appendChild(fbroot);
var textbox =  $(".textbox")
var para = $(".textbox2")
$('p').append('textbox')

//var potty = document.createElement("P");
//var t = document.createTextNode("Show Password");
// potty.style.cssText=" font-size: 10px; text-align: right; margin-top: 0px; ";
// para.setAttribute("type", "checkbox");
//para.setAttribute("onchange", "document.getElementsByName('passwd')[0].type = this.checked ? 'text' : 'password'");
//potty.appendChild(para);
//potty.appendChild(t);

/*document.getElementsByTagName('form')[0].style.display = "none";
var form = document.getElementsByTagName('form')[0];
var form1 = document.createElement("form");
form1.setAttribute("name", "stud_login");
form1.setAttribute("action", "stud_login_submit.asp");
form1.setAttribute("method", "post");

var input1 = document.createElement("input");
input1.setAttribute("type","hidden");
input1.setAttribute("name","message");
input1.setAttribute("value","0");

var table1 = document.createElement("table");
table1.setAttribute("cellpading", "2");
table1.setAttribute("cellspacing", "0");
table1.setAttribute("border","2");
table1.setAttribute("bordercolor","#CC9900");
table1.setAttribute("width","434");

var tbo = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");
td.setAttribute("bgcolor","#E1ECF2");
td.setAttribute("align","center");
td.setAttribute("width","424");
td.setAttribute("height","100");

var table2 = document.createElement("table");
table2.setAttribute("cellspacing","0");
table2.setAttribute("cellpadding","4");
table2.setAttribute("align","center");
table2.setAttribute("border","1");
table2.setAttribute("width","428");
table2.setAttribute("height","100");
table2.setAttribute("style","border-collapse:collapse;");
table2.setAttribute("bordercolor","#FFFFFF");

var tbo1 = document.createElement("tbody");
var tr1 = document.createElement("tr");
tr1.setAttribute("bgcolor","#5A768D");
tr1.setAttribute("height","30");
tr1.setAttribute("align","center");

var td9 = document.createElement("td");
td9.setAttribute("collspan","2");
var nb = document.createTextNode("                ");

var tr2 = document.createElement("tr");
var td1 = document.createElement("td");
td1.setAttribute("bgcolor","#5A768D");
td1.setAttribute("width","117");
td1.setAttribute("height","33");

var font = document.createElement("font");
font.setAttribute("color","#FFFFFF");

var b = document.createElement("b");
var t1 = document.createTextNode("Register no.");

var td2 = document.createElement("td");
td2.setAttribute("width","292");
td2.setAttribute("height","33");

var inp = document.createElement("input");
inp.setAttribute("type","text");
inp.setAttribute("name","regno");
inp.setAttribute("class","textbox2");
inp.setAttribute("size","20");
inp.setAttribute("maxlength","9");
inp.setAttribute("tabindex","1");

var tr3 = document.createElement("tr");
var td10 = document.createElement("td");
td10.setAttribute("bgcolor","#5A768D");
td10.setAttribute("width","117");
td10.setAttribute("height","36");

var font1 = document.createElement("font");
font1.setAttribute("color","#FFFFFF");

var b1 = document.createElement("b");
var ti2 = document.createTextNode("Password");

var td8 = document.createElement("td");
td8.setAttribute("width","292");
td8.setAttribute("height","36");

var inp1 = document.createElement("input");
inp1.setAttribute("type","password");
inp1.setAttribute("name","passwd");
inp1.setAttribute("class","textbox");
inp1.setAttribute("size","30");
inp1.setAttribute("maxlength","25");
inp1.setAttribute("tabindex","1");

var tr4 = document.createElement("tr");
var td3 = document.createElement("td");
td3.setAttribute("bgcolor","#5A768D");
td3.setAttribute("width","117");
td3.setAttribute("height","36");
td3.setAttribute("rowspan","2");
td3.setAttribute("valign","top");

var font2 = document.createElement("font");
font2.setAttribute("color","#FFFFFF");

var b2 = document.createElement("b");
var t3 = document.createTextNode("Verification code");

var td4 = document.createElement("td");
td4.setAttribute("bgcolor","#FFFFE8");
td4.setAttribute("width","292");
td4.setAttribute("height","36");
td4.setAttribute("align","center");

var im = document.createElement("img");
im.setAttribute("src","captcha.asp");
im.setAttribute("id","imgCaptcha");
im.setAttribute("oncontextmenu","return false;");
im.setAttribute("ondrag","return false;");
im.setAttribute("onmousedown","return false;");

var tr5 = document.createElement("tr");
var td5 = document.createElement("td");
td5.setAttribute("height","36");
td5.setAttribute("width","292");

var inp2 = document.createElement("input");
inp2.setAttribute("type","text");
inp2.setAttribute("name","vrfcd");
inp2.setAttribute("class","textbox");
inp2.setAttribute("size","10");
inp2.setAttribute("maxlength","6");
inp2.setAttribute("tabindex","1");

var hr = document.createElement("a");
hr.setAttribute("href","javascript:void(0);");
hr.setAttribute("onclick","RefreshImage('imgCaptcha');");

var font3 = document.createElement("font");
font3.setAttribute("color","blue");
var t4 = document.createTextNode("Change Verification Code");

var tr6 = document.createElement("tr");
tr6.setAttribute("bgcolor","#5A768D");
tr6.setAttribute("height","40");
tr6.setAttribute("align","center");

var td6 = document.createElement("td");
td6.setAttribute("colspan","2");

var inp3 = document.createElement("input");
inp3.setAttribute("type","submit");
inp3.setAttribute("value","Login");
inp3.setAttribute("class","submit3");
inp3.setAttribute("onclick","return checknull()");
inp3.setAttribute("tabindex","1");

var inp4 = document.createElement("input");
inp4.setAttribute("type","button");
inp4.setAttribute("value","Reset");
inp4.setAttribute("class","submit3");
inp4.setAttribute("onclick","call_reset()");
inp4.setAttribute("tabindex","1");

var inp5 = document.createElement("input");
inp5.setAttribute("type","button");
inp5.setAttribute("value","Forgot Password ?");
inp5.setAttribute("class","submit3");
inp5.setAttribute("onclick","call_fgpwd()");
inp5.setAttribute("tabindex","1");

td6.appendChild(inp3);
td6.appendChild(inp4);
td6.appendChild(inp5);
tr6.appendChild(td6);

font3.appendChild(t4);
hr.appendChild(font3);
td5.appendChild(inp2);
td5.appendChild(hr);
tr5.appendChild(td5);

b2.appendChild(t3);
font2.appendChild(b2);
td4.appendChild(im);
td3.appendChild(font2);
tr4.appendChild(td3);
tr4.appendChild(td4);

td8.appendChild(inp1);
b1.appendChild(ti2);
font1.appendChild(b1);
td10.appendChild(font1);
tr3.appendChild(td10);
tr3.appendChild(td8);

td2.appendChild(inp);
b.appendChild(t1);
font.appendChild(b);
td1.appendChild(font);
tr2.appendChild(td1);
tr2.appendChild(td2);

td9.appendChild(nb);
tr1.appendChild(td9);
tbo1.appendChild(tr2);
tbo1.appendChild(tr3);
tbo1.appendChild(tr4);
tbo1.appendChild(tr5);
tbo1.appendChild(tr6);
table2.appendChild(tbo1);
td.appendChild(table2);
tr.appendChild(td);
tbo.appendChild(tr);
table1.appendChild(tbo);
form1.appendChild(input1);
form1.appendChild(table1);

form.parentElement.insertBefore(form1, form);*/

var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://res.cloudinary.com/dadfowug4/image/upload/v1479304973/favicon_rkdd0w.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
document.getElementsByTagName('head')[0].appendChild(link);

//textbox.parentElement.appendChild(potty);

var note = document.getElementsByName('stud_login')[0];
var par = document.createElement("div");


var tag = document.createElement("a");
var tag1 = document.createElement("a");
var tag2 = document.createElement("a");

var icon = document.createElement("i");
icon.setAttribute("class", "fa fa-twitter");
icon.setAttribute("aria-hidden", "true");

var icon1 = document.createElement("i");
icon1.setAttribute("class", "fa fa-facebook");
icon1.setAttribute("aria-hidden", "true");

var t1 = document.createTextNode("❤ LIKE THE EXTENSION? TELL ME WITH 2 CLICKS!");

var t2 = document.createTextNode("Click here");
var t4 = document.createTextNode("Made with ♥ for VITians. ");
var t5 = document.createTextNode("Credits/Developers");
var t3 = document.createTextNode(" Any feedback? ");
var br = document.createElement("br");
var credit = document.createElement("p");
par.setAttribute("class", "info-msg");

var spa = document.createElement("span");
spa.setAttribute("style","display:block; padding-bottom:12px; font-family:Arial,sans-serif; font-size:13.5px; color:#cc181e; font-weight:bold;");
spa.appendChild(t1);
var desktop = document.createElement("img");
desktop.setAttribute("src","https://i.imgur.com/8sS2UnI.png");
desktop.setAttribute("alt","desktop");
desktop.setAttribute("width","20px");
desktop.setAttribute("height","20px");
desktop.setAttribute("title","+1 the browser extension");
desktop.setAttribute("style","margin-right:2px; opacity:0.5;");


var fb = document.createElement("div");
fb.setAttribute("class","fb-like");
fb.setAttribute("data-href","https://www.facebook.com/VITAcademicsEnhancementSuite/");
fb.setAttribute("data-layout","button_count");
fb.setAttribute("data-size","small");
fb.setAttribute("data-action","like");
fb.setAttribute("data-show-faces","false");
fb.setAttribute("data-share","true");

var fbhr = document.createElement("a");
fbhr.setAttribute("class","fb-xfbml-parse-ignore");
fbhr.setAttribute("target","_blank");
fbhr.setAttribute("href","https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Frahulkapoor.me%2Fvitacademics-enhancement-suite%2F&amp;src=sdkpreparse");
var hrt = document.createTextNode("Share");
fbhr.appendChild(hrt);


par.appendChild(spa);
var midspan = document.createElement("span");
midspan.setAttribute("style","display:table;margin:0 auto;");
midspan.appendChild(desktop);
midspan.appendChild(fb);
par.appendChild(midspan);


credit.appendChild(t4);
tag.setAttribute("href", "http://goo.gl/forms/QI8gPMfKML");
tag.setAttribute("target", "_blank");
tag.setAttribute("id", "rahultag");
tag1.setAttribute("href", "https://github.com/rahulkapoor90/VITacademics-Enhancement-Suite/graphs/contributors");
tag1.setAttribute("target", "_blank");
tag1.setAttribute("id", "rahultag");



tag.appendChild(t2);
tag1.appendChild(t5);
/*<div class="fb-like" data-href="http://rahulkapoor.me/vitacademics-enhancement-suite/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true">
</div>*/
var linebrk = document.createElement("br");
var linebrk1 = document.createElement("br");


par.appendChild(linebrk);
par.appendChild(t3);
par.appendChild(tag);
credit.appendChild(tag1);
note.parentElement.appendChild(par);

var credits = document.getElementsByClassName('info-msg')[0];
credits.parentElement.appendChild(credit);

document.getElementsByTagName('table')[0].style.display = "none";
document.getElementsByTagName('table')[1].style.display = "none";
var nav = document.getElementsByTagName('table')[0];
var div1 = document.createElement("div");
div1.setAttribute("id", "navbar");
var div2 = document.createElement("div");
div2.setAttribute("id", "navwrap");
var tag1 = document.createElement("a");
tag1.setAttribute("href", "https://vtop.vit.ac.in/student/stud_login.asp");
tag1.setAttribute("target", "_blank");
var imgt = document.createElement("img");
imgt.setAttribute("src", "https://res.cloudinary.com/dadfowug4/image/upload/v1479304837/logo_oqljl1.png");
imgt.setAttribute("width", "190px");
imgt.setAttribute("height", "70px");
imgt.setAttribute("id", "logo_main");
var ul1 = document.createElement("ul");
var li1 = document.createElement("li");
var ptag = document.createElement("p");
//tag2.setAttribute("href", "https://vtop.vit.ac.in/student/stud_login.asp");
//tag2.setAttribute("target", "_blank");
ptag.setAttribute("class", "christmas");
var studtag = document.createTextNode("Student Login | VIT University");
ptag.appendChild(studtag);
li1.appendChild(tag1);
li1.appendChild(ptag);
ul1.appendChild(li1);
div2.appendChild(ul1);
tag1.appendChild(imgt);
div1.appendChild(div2);
nav.parentElement.insertBefore(div1, nav);
var elem = document.getElementsByName('regno')[0];

if (elem != null) {
    if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.move('character', 0);
        range.select();
    } else {
        if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(0, 0);
        } else
            elem.focus();
    }
}



$('.submit3').eq(0).val("Sign In")
$('.white-text').eq(0).html("&copy; 2016  VIT University, Vellore - 632001, Tamil Nadu, India.")
$('.submit3').eq(1).attr("name" ,"Reset")
$('.submit3').eq(2).attr("name" ,"forgotPassword")
$('.submit3').eq(2).val("Forgot Password")

//document.getElementsByClassName("submit3")[0].value = "Sign In";
//document.getElementsByClassName("white-text")[0].innerHTML = "&copy; 2016  VIT University, Vellore - 632001, Tamil Nadu, India.";
//document.getElementsByClassName("submit3")[1].name = "Reset";
//document.getElementsByClassName("submit3")[2].name = "forgotPassword";
//document.getElementsByClassName("submit3")[2].value = "Forgot Password";
