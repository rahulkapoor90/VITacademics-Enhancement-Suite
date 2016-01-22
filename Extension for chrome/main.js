var textbox = document.getElementsByName('passwd')[0];
    var para = document.createElement("input");
	var potty = document.createElement("P");

    var t = document.createTextNode("Show Password");
   // potty.style.cssText=" font-size: 10px; text-align: right; margin-top: 0px; ";
    para.setAttribute("type", "checkbox"); 
	para.setAttribute("onchange", "document.getElementsByName('passwd')[0].type = this.checked ? 'text' : 'password'"); 
    potty.appendChild(para);  
	potty.appendChild(t);

    textbox.parentElement.appendChild(potty);
	
	var note = document.getElementsByName('stud_login')[0];
	var par = document.createElement("div");
	var icon = document.createElement("i");
	var t1 = document.createTextNode("Hello! Please try to refresh page again if the verification is not filled properly.");
	par.setAttribute("class", "info-msg"); 
	icon.setAttribute("class", "fa fa-check");
	par.appendChild(icon);
	par.appendChild(t1);
	note.parentElement.appendChild(par);

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
document.getElementsByClassName("submit3")[1].name = "Reset";
document.getElementsByClassName("submit3")[2].name = "forgotPassword";
document.getElementsByClassName("submit3")[2].value = "Forgot Password";