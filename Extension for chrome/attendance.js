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