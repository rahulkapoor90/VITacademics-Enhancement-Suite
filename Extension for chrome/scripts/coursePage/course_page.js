$(document).ready(function () {
    var table1 = document.getElementsByTagName('table')[1];
    var select1 = document.getElementsByTagName('select')[0];
    var select2 = document.getElementsByTagName('select')[1];
    var select3 = document.getElementsByTagName('select')[2];
    var table2 = document.getElementsByTagName('table')[2];
    table1.setAttribute('class','table table-bordered table-responsive');
    select1.setAttribute('class','form-control select-course');
    select2.setAttribute('class','form-control select-course');
    select3.setAttribute('class','form-control select-course');
    
    //Only add Attribute if course page table is present
    if(table2)
        table2.setAttribute('class','table table-bordered table-responsive');
});