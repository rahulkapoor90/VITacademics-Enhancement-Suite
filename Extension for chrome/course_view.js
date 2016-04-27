$(document).ready(function () {
$("table table td:contains('NIL')").closest("tr").hide();
	var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
    document.getElementsByTagName('head')[0].appendChild(link);
    var table1 = document.getElementsByTagName('table')[1];
    var table2 = document.getElementsByTagName('table')[2];
    var table3 = document.getElementsByTagName('table')[6];
    document.getElementsByTagName('table')[1].style='';
    document.getElementsByTagName('table')[2].style='';
    document.getElementsByTagName('table')[6].style='';
    table1.setAttribute('class','table table-bordered table-responsive');
    table2.setAttribute('class','table table-bordered table-responsive');
    table3.setAttribute('class','table table-bordered table-responsive');
});
