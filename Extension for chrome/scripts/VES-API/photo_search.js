$(function () {
    $('#regno').bind("input paste", function () {
        if (this.value.length === 9) {
            updateName(this.value);
        }
    });
    $('#previousBtn').click(function () {
        updateName($('#regno').val());
    });
    $('#nextBtn').click(function () {
        updateName($('#regno').val());
    });
});

function updateName(regno) {
    $.post("https://vtop.vit.ac.in/student/hostel_roommate_eligibility.asp", {
        stdregno: regno,
        btnSub: "submit"
    }, function (data) {
        var name = data.split('<td colspan="2"><b>')[1].split('</b></td>')[0];
        $('#showName').text(name);
    });
}