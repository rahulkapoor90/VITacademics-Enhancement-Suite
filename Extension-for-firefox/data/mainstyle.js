var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", "resource://vit-academics-enhancement-suite/content/skin/main.css");
document.getElementsByTagName("head")[0].appendChild(fileref);

var textbox = document.getElementsByName('passwd')[0];
    var para = document.createElement("input");
	var potty = document.createElement("P");
    //var t = document.createTextNode("Show Password");
   // potty.style.cssText=" font-size: 10px; text-align: right; margin-top: 0px; ";
   // para.setAttribute("type", "checkbox"); 
	//para.setAttribute("onchange", "document.getElementsByName('passwd')[0].type = this.checked ? 'text' : 'password'"); 
    //potty.appendChild(para);  
	//potty.appendChild(t);

	var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'http://www.vit.ac.in/images/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
	
    textbox.parentElement.appendChild(potty);
	
	var note = document.getElementsByName('stud_login')[0];
	var par = document.createElement("div");
	var tag = document.createElement("a");
	var tag1 = document.createElement("a");
	var tag2 = document.createElement("a");
	var tag3 = document.createElement("a");

	var icon = document.createElement("i");
	icon.setAttribute("class","fa fa-twitter");
	icon.setAttribute("aria-hidden","true");

	var icon1 = document.createElement("i");
	icon1.setAttribute("class","fa fa-facebook");
	icon1.setAttribute("aria-hidden","true");

	var t1 = document.createTextNode(" Hello! Please try to refresh page again if the verification is not filled properly.");
	var t2 = document.createTextNode("Click here");
	var t4 = document.createTextNode("Made with love for VITians by ");
	var t5 = document.createTextNode("Rahul Kapoor ");
	var t3 = document.createTextNode(" Any suggestions? ");
	var br = document.createElement("br");
	var credit = document.createElement("p");
	par.setAttribute("class", "info-msg"); 
	par.appendChild(t1);
	credit.appendChild(t4);
	tag.setAttribute("href", "http://goo.gl/forms/QI8gPMfKML");
	tag.setAttribute("target", "_blank");
	tag.setAttribute("id", "rahultag");
	tag1.setAttribute("href", "http://github.com/rahulkapoor90");
	tag1.setAttribute("target", "_blank");
	tag1.setAttribute("id", "rahultag");
	tag2.setAttribute("href","https://twitter.com/iamrahulkapoor");
	tag2.setAttribute("target","_blank");
	tag3.setAttribute("href","https://facebook.com/rahulkapoor99");
	tag3.setAttribute("target","_blank");

	par.appendChild(t3);
	tag.appendChild(t2);
	tag1.appendChild(t5);
	tag2.appendChild(icon);
	tag3.appendChild(icon1);

	par.appendChild(tag);
	credit.appendChild(tag1);
	note.parentElement.appendChild(par);

	var credits = document.getElementsByClassName('info-msg')[0];
	credits.parentElement.appendChild(credit);
   
	document.getElementsByTagName('table')[0].style.display="none";
	document.getElementsByTagName('table')[1].style.display="none";
	 var nav = document.getElementsByTagName('table')[0];
	var div1 = document.createElement("div");
	div1.setAttribute("id", "navbar");
	var div2 = document.createElement("div");
	div2.setAttribute("id","navwrap");
	var tag1 = document.createElement("a");
	tag1.setAttribute("href", "https://academics.vit.ac.in/student/stud_login.asp");
	tag1.setAttribute("target", "_blank");
	var t4 = document.createElement("img");
	t4.setAttribute("src", "http://www.vit.ac.in/images/logo.png");
	t4.setAttribute("width","190px");
	t4.setAttribute("height","70px");
	t4.setAttribute("id","logo_main");
	var ul1 = document.createElement("ul");
	var li1 = document.createElement("li");
	var tag2 = document.createElement("p");
	//tag2.setAttribute("href", "https://academics.vit.ac.in/student/stud_login.asp");
	//tag2.setAttribute("target", "_blank");
	tag2.setAttribute("id", "parent_link");
	var t5 = document.createTextNode("Student Login | VIT University");
	tag2.appendChild(t5);
	li1.appendChild(tag1);
	li1.appendChild(tag2);
	ul1.appendChild(li1);
	div2.appendChild(ul1);
	tag1.appendChild(t4);
	div1.appendChild(div2);
	 nav.parentElement.insertBefore(div1,nav);
	var elem = document.getElementsByName('regno')[0];

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
document.getElementsByClassName("submit3")[0].value = "Sign In";
document.getElementsByClassName("white-text")[0].innerHTML = "&copy; 2016  VIT University, Vellore - 632001, Tamil Nadu, India.";
document.getElementsByClassName("submit3")[1].name = "Reset";
document.getElementsByClassName("submit3")[2].name = "forgotPassword";
document.getElementsByClassName("submit3")[2].value = "Forgot Password";