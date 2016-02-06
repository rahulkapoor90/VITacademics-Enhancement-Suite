var textbox = document.getElementsByName('passwd')[0];
    var para = document.createElement("input");
	var potty = document.createElement("P");

    //var t = document.createTextNode("Show Password");
   // potty.style.cssText=" font-size: 10px; text-align: right; margin-top: 0px; ";
   // para.setAttribute("type", "checkbox"); 
	//para.setAttribute("onchange", "document.getElementsByName('passwd')[0].type = this.checked ? 'text' : 'password'"); 
    //potty.appendChild(para);  
	//potty.appendChild(t);

    textbox.parentElement.appendChild(potty);
	
	var note = document.getElementsByName('stud_login')[0];
	var par = document.createElement("div");
	var tag = document.createElement("a");
	var t1 = document.createTextNode(" Hello! Please try to refresh page again if the verification is not filled properly. Developed by - ");
	var t2 = document.createTextNode("Rahul Kapoor");
	
	  function myfunction(e) {
        var s = String.fromCharCode( e.which );
    if ( s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey ) {
        alert('caps is on');
    }
         };

	par.setAttribute("class", "info-msg"); 
	par.appendChild(t1);
	tag.setAttribute("href", "http://www.github.com/rahulkapoor90");
	tag.setAttribute("id", "rahultag");
	tag.appendChild(t2);
	par.appendChild(tag);
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
var el = document.getElementsByClassName("textbox")[0].onkeypress = myfunction(event);
document.getElementsByClassName("submit3")[0].value = "Sign In";
document.getElementsByClassName("white-text")[0].innerHTML = "&copy; 2016  VIT University, Vellore - 632001, Tamil Nadu, India.";
document.getElementsByClassName("submit3")[1].name = "Reset";
document.getElementsByClassName("submit3")[2].name = "forgotPassword";
document.getElementsByClassName("submit3")[2].value = "Forgot Password";