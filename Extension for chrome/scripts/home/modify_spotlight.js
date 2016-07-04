$(document).ready(function() {
    console.log("ready!");
    var table = $("table tbody table");

    console.log(table)
    var element = table[1];


    var spotlight  = $(element).find('tbody');
    console.log($(element).find('tbody'))

    spotlight.find('tr').each(function (key , val) {
    	var $tds =$(this).find('td')
    	spotlight_message = $tds.text()
    	console.log(spotlight_message)
    });
















    // $('body').append('<div class="container><div class="row" id="main-row" ></div></div>');
    // $('#main-row').append('<div class="col-md-4 text-center well" id="attendance"><button type="button" class="btn btn-primary"><span class="text-right">Attendance<span></button></div>');
    // $('#main-row').append('<div class="col-md-4 text-center well" id="message"><button type="button" class="btn btn-primary"><span class="text-right">Messages<span></button></div>');
    // $('#main-row').append('<div class="col-md-4 text-center well" id="spotlight"><button type="button" class="btn btn-primary"><span class="text-right">Spotlight<span></button></div>');






});
