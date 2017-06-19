var gradePoint = {
    "S": 10,
    "A": 9,
    "B": 8,
    "C": 7,
    "D": 6,
    "E": 5,
    "F": 0,
    "N": 0
};

var totalCredits = 0;
var creditsProduct = 0;

$(function () {
    var $gradeRow = $('tr[align="center"][bgcolor="#EDEADE"]');
    var $tbodyAppend = $gradeRow.parent('tbody');

    // calc gpa
    $gradeRow.each(function () {
        var credit = Number($(this).children('td').eq(4).text().split(' ').pop());
        var grade = gradePoint[$(this).children('td').eq(9).text()];
        if (grade >= 0 && credit) {
            totalCredits += credit;
            creditsProduct += (grade * credit);
        }
    });

    var gpa = creditsProduct / totalCredits;
    console.log("GPA: " + gpa);

    var gpaRow = '<tr align="center" bgcolor="#EDEADE"><td colspan="11" align="center"><strong>GPA: ' + gpa.toFixed(2) + '</strong></td></tr>';

    $tbodyAppend.append(gpaRow);
});