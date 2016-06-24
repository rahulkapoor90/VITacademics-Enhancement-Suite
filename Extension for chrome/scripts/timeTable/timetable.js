$(document).ready(function () {
	//$('table:first-child ul:first-child').hide();
        $('table:nth-child(1) td:nth-child(15), td:nth-child(14)').hide();
});
var textbox = document.getElementsByName('regular')[0];
    var para = document.createElement("input");
	var png = document.createElement("input");
	var pdf = document.createElement("input");
	var csv = document.createElement("input");
	var xml = document.createElement("input");
	var doc = document.createElement("input");
	var txt = document.createElement("input");
	var info = document.createElement("p");
    var info1 = document.createElement("p");
	  var para1 = document.createElement("input");
	var png1 = document.createElement("input");
	var pdf1 = document.createElement("input");

    info.setAttribute("type", "button"); 
	var t2 = document.createTextNode("Export 1st Table into the following formats :");
    info.setAttribute("id", "infoExport"); 
	//para.setAttribute("class", "Export"); 
	info.appendChild(t2);
    textbox.parentElement.appendChild(info);
	
	para.setAttribute("type", "button"); 
    para.setAttribute("id", "ExportEXCEL"); 
	para.setAttribute("class", "Export"); 
    para.setAttribute("value","Export into Excel");
    textbox.parentElement.appendChild(para);
	
	png.setAttribute("type", "button"); 
    png.setAttribute("id", "ExportPNG"); 
	png.setAttribute("class", "Export"); 
    png.setAttribute("value","Export into PNG");
    textbox.parentElement.appendChild(png);
	
	pdf.setAttribute("type", "button"); 
    pdf.setAttribute("id", "ExportPDF"); 
	pdf.setAttribute("class", "Export"); 
    pdf.setAttribute("value","Export into XML");
    textbox.parentElement.appendChild(pdf);

	 info1.setAttribute("type", "button"); 
	var t3 = document.createTextNode("Export 2nd Table into the following formats :");
    info1.setAttribute("id", "infoExport"); 
	//para.setAttribute("class", "Export"); 
	info1.appendChild(t3);
    textbox.parentElement.appendChild(info1);
	
	para1.setAttribute("type", "button"); 
    para1.setAttribute("id", "ExportEXCEL1"); 
	para1.setAttribute("class", "Export"); 
    para1.setAttribute("value","Export into Excel");
    textbox.parentElement.appendChild(para1);
	
	png1.setAttribute("type", "button"); 
    png1.setAttribute("id", "ExportPNG1"); 
	png1.setAttribute("class", "Export"); 
    png1.setAttribute("value","Export into PNG");
    textbox.parentElement.appendChild(png1);
	
	pdf1.setAttribute("type", "button"); 
    pdf1.setAttribute("id", "ExportPDF1"); 
	pdf1.setAttribute("class", "Export"); 
    pdf1.setAttribute("value","Export into XML");
    textbox.parentElement.appendChild(pdf1);
	
$("#ExportEXCEL").click(function (e) {
  $('table:nth-child(2)').tableExport({ type: 'excel', escape: 'false' });  
});
$("#ExportPNG").click(function (e) {
  $('table:nth-child(2)').tableExport({ type: 'png', escape: 'false' });  
});
$("#ExportPDF").click(function (e) {
  $('table:nth-child(2)').tableExport({ type: 'xml', escape: 'false' });  
});

$("#ExportEXCEL1").click(function (e) {
  $('table:first-child table:nth-child(odd)').tableExport({ type: 'excel', escape: 'false' });  
});
$("#ExportPNG1").click(function (e) {
  $('table:first-child table:nth-child(odd)').tableExport({ type: 'png', escape: 'false' });  
});
$("#ExportPDF1").click(function (e) {
  $('table:first-child table:nth-child(odd)').tableExport({ type: 'xml', escape: 'false' });  
});