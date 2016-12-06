$(function () {
    $("link[href='style.css']").remove(); //remove remove default css file

    $('*[style]').removeAttr('style');
    $('*').removeAttr('cellspacing');
    $('*').removeAttr('cellpadding');
    $('*').removeAttr('background');
    $('*').removeAttr('width');
    $('*').removeAttr('height');
    $('*').removeAttr('bordercolor');
    $('*').removeAttr('bgcolor');
    $('*').removeAttr('border');
    $('*').removeAttr('align');
    $('*').removeAttr('valign');
    $('*').removeAttr('color');
    $('*').removeAttr('marginwidth');
    $('*').removeAttr('marginheight');
    $('*').removeAttr('leftmargin');
    $('*').removeAttr('topmargin');
    $('*').removeAttr('size');
    $('*').removeAttr('face');

    $('body').prepend('<div class="container"><div id="header-section" class="card-panel hoverable"></div></div>');
    $('#header-section').append('<h4 style="margin-bottom:10px;margin-top:0;" class="center-align">VIT Academics Enhancement Suite</h4>');
    var findName = $('font').eq(1).text().split("-");
    findName = findName[0].split(" ");
    nameMsg = "Hi";
    var i = findName.length;
    for (var j = 5; j < i; j++) {
        nameMsg = nameMsg + " " + findName[j];
    }
    $('#header-section').append('<div class="row"><div class="col">' + nameMsg + '</div><div class="col right"><a class="btn" href="stud_logout.asp">LOGOUT</a></div></div>');

    $('table').eq(2).replaceWith('<div class="container-fluid">' + $('table').eq(2).html() + '</div>');
    $('table').remove();
    $('tr').remove();
    $('td').remove();

    $('iframe[src="content.asp"]').css('width', '100%');
    $('iframe[src="content.asp"]').css('height', '85%');

    $('img').remove();
    $('br').remove();
    $('font').remove();
    $('b').remove();
    $('table:last').remove();
    $('iframe').not('[src="content.asp"]').remove();
});