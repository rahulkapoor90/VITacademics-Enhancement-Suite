$(function () {
    var marksTables = $('table').eq(1).find('tbody').find('tbody');

    for (var i = 0; i < marksTables.length; i++) {
        $marksTable = $(marksTables[i]);
        $tr = $marksTable.children('tr');
        // console.log($marksTable.children('tr').eq(1).children('td').eq(3).text("ok"));
        var max_mark = 0;
        var weightage_percentage = 0;
        var marks_scored = 0;
        var weightage_mark = 0;
        for (var j = 1; j < $tr.length; j++) {
            max_mark += Number($tr.eq(j).children('td').eq(2).text());
            weightage_percentage += Number($tr.eq(j).children('td').eq(3).text());
            marks_scored += Number($tr.eq(j).children('td').eq(5).text());
            weightage_mark += Number($tr.eq(j).children('td').eq(6).text());
        }
        var totalRow = '<tr bgcolor="#CCCCCC">' +
            '<td align="center"><font color="#000000"></font></td>' +
            '<td><font color="#000000">Total</font></td>' +
            '<td align="center"><font color="#000000">' + (max_mark).toFixed(2) + '</font></td>' +
            '<td align="center">' + (weightage_percentage).toFixed(2) + '</td>' +
            '<td align="center"><font color="#000000"></font></td>' +
            '<td align="center"><font color="#000000">' + (marks_scored).toFixed(2) + '</font></td>' +
            '<td align="center"><font color="#000000">' + (weightage_mark).toFixed(2) + '</font></td>' +
            '</tr>';

        $marksTable.append(totalRow);
    }
});