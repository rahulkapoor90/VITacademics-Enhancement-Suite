var textbox = document.getElementsByName('rgrsemcd')[0];
    var para = document.createElement("input");
	var potty = document.createElement("P");

    var t = document.createTextNode("Show Password");
   // potty.style.cssText=" font-size: 10px; text-align: right; margin-top: 0px; ";
    para.setAttribute("type", "checkbox"); 
    potty.appendChild(para);  
	potty.appendChild(t);

    textbox.parentElement.appendChild(potty);