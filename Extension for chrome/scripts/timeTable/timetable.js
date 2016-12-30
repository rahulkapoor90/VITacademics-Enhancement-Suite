$(function () {

    function table2jpg(element) {
        var newWindow = window.open();
        html2canvas(element, {
            onrendered: function (canvas) {
                timetable_img_src = canvas.toDataURL("image/jpeg");
                newWindow_data =
                    '<html><head><title>VES</title></head><body><a href="' + timetable_img_src + '" download="VES_MyTimeTable"><img style="width:100%;" src="' + timetable_img_src + '" alt="FFCSonTheGo"/></a>' +
                    '<h1>Click on the image to download.</h1>';

                newWindow.document.write(newWindow_data);
            }
        });
    }

    var tableOne_btn = $('<input type="button" value="Export to JPG">');
    var tableTwo_btn = $('<input type="button" value="Export to JPG">');

    var tableOneElement = $('table')[1];
    console.log(tableOneElement);
    var tableTwoElement = $('table')[2];
    console.log(tableTwoElement);

    tableOne_btn.click(function () {
        table2jpg(tableOneElement);
    });

    tableTwo_btn.click(function () {
        table2jpg(tableTwoElement);
    });

    // add buttons
    $('table').eq(1).after(tableOne_btn);
    $('table').eq(2).after(tableTwo_btn);
});