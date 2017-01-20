function table2jpg(element, filename) {
    var newWindow = window.open();
    html2canvas(element, {
        onrendered: function (canvas) {
            timetable_img_src = canvas.toDataURL("image/jpeg");
            newWindow_data =
                '<html><head><title>VES</title></head><body><a href="' + timetable_img_src + '" download="' + filename + '"><img style="width:100%;" src="' + timetable_img_src + '" alt="FFCSonTheGo"/></a>' +
                '<h1>Click on the image to download.</h1>';

            newWindow.document.write(newWindow_data);
        }
    });
}

$(function () {

    // create buttons
    var tableOne_btn = $('<input type="button" value="Export to JPG">');
    var tableTwo_btn = $('<input type="button" value="Export to JPG">');

    // add buttons
    $('table').eq(1).after(tableOne_btn);
    $('table').eq(2).after(tableTwo_btn);

    // get table elements
    var tableOneElement = $('table')[1];
    var tableTwoElement = $('table')[2];

    // add on click event listener
    tableOne_btn.click(function () {
        table2jpg(tableOneElement, "MyCourses");
    });
    tableTwo_btn.click(function () {
        table2jpg(tableTwoElement, "MyTimetable");
    });
});