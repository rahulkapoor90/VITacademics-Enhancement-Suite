$(document).ready(function () {
	var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
    document.getElementsByTagName('head')[0].appendChild(link);
    var table1 = document.getElementsByTagName('table')[1];
    var select1 = document.getElementsByTagName('select')[0];
    var select2 = document.getElementsByTagName('select')[1];
    var select3 = document.getElementsByTagName('select')[2];
    var table2 = document.getElementsByTagName('table')[2];
    table1.setAttribute('class','table table-bordered table-responsive');
    select1.setAttribute('class','form-control select-course');
    select2.setAttribute('class','form-control select-course');
    select3.setAttribute('class','form-control select-course');
    table2.setAttribute('class','table table-bordered table-responsive');
});