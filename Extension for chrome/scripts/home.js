var info = document.getElementsByName('chart1_table')[0];
    var para = document.createElement("p");
    var t = document.createTextNode("TIP: Click on \"Search\" button after entering faculty name.");
	para.setAttribute("id", "info-msg"); 
	para.appendChild(t);
    info.parentElement.appendChild(para);