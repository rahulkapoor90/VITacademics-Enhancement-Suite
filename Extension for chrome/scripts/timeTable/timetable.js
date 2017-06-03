$(function () {

    function table2jpg(element) {
        var newWindow = window.open();
        html2canvas(element, {
            onrendered: function (canvas) {
                timetable_img_src = canvas.toDataURL("image/jpeg");
                newWindow_data =
                    '<html><head><title>VES</title></head><body><a href="' + timetable_img_src + '" download="MyTimeTable_VES"><img src="' + timetable_img_src + '" alt="FFCSonTheGo"/></a>' +
                    '<h1>Click on the image to download.</h1>';

                newWindow.document.write(newWindow_data);
            }
        });
    }

    function addExportBtns(toTable, btnJPG, btnXML, btnEXCEL) {
        btnJPG.click(function () {
            table2jpg(toTable);
        });
        btnXML.click(function () {
            $(toTable).tableExport({
                type: 'xml',
                escape: 'false'
            });
        });
        btnEXCEL.click(function () {
            $(toTable).tableExport({
                type: 'excel',
                escape: 'false'
            });
        });

        $(toTable).after(btnXML);
        $(toTable).after(btnEXCEL);
        $(toTable).after(btnJPG);
    }

    var allTables = $('table');
    for (var i = 1; i < allTables.length; i++) {
        var btnJPG = $('<input type="button" value="Export to JPG">');
        var btnXML = $('<input type="button" value="Export to XML">');
        var btnEXCEL = $('<input type="button" value="Export to Excel">');

        addExportBtns(allTables[i], btnJPG, btnXML, btnEXCEL);
    }
});