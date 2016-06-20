function getDateString(date) {
	var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	return ("0"+date.getDate()).slice(-2)
			+"-"+
			month[date.getMonth()]
			+"-"+
			date.getFullYear();
}

document.getElementsByName("to_date")[0].value=getDateString(new Date());
$(document).ready(function () {
	//$('table:first-child ul:first-child').hide();
   //     $('table:nth-child(1) td:nth-child(7)').hide();
});
$(document).ready(function () {
	var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/themes/orange/pace-theme-flat-top.css';
    document.getElementsByTagName('head')[0].appendChild(link);
    var script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.js';
    document.getElementsByTagName('head')[0].appendChild(script1);
    
});
