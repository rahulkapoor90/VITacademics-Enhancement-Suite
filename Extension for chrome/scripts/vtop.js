$(function () {
    $("link[href='style2.css']").remove(); //remove remove default css file
    $("link[href='style.css']").remove();
    $("body").addClass("container");

    // Removing inline css
    $('font').contents().unwrap();
    $('u').contents().unwrap();
    $('br').remove();
    $('*[style]').removeAttr('style');
    $('*').removeAttr('cellspacing');
    $('*').removeAttr('cellpadding');
    $('*').removeAttr('width');
    $('*').removeAttr('height');
    $('*').removeAttr('bordercolor');
    $('*').removeAttr('bgcolor');
    $('*').removeAttr('border');
    $('*').removeAttr('align');
    $('*').removeAttr('valign');
    $('*').removeAttr('colspan');
    $('*').removeAttr('background');
    $('*').removeAttr('marginheight');
    $('*').removeAttr('topmargin');
    $('*').removeAttr('leftmargin');

    // remove unnecessary elements
    $('table:last').remove();
    $('img').remove();
    $('table').eq(0).remove();

    // Replace table and its childrens with div or appropriate tag
    while ($('table').length > 0) {
        $('table').eq(0).replaceWith('<div>' + $('table').eq(0).html() + '</div>');
    }
    while ($('tr').length > 0) {
        $('tr').eq(0).replaceWith('<div class="row card-panel">' + $('tr').eq(0).html() + '</div>');
    }
    while ($('td').length > 0) {
        $('td').eq(0).replaceWith('<div class="col">' + $('td').eq(0).html() + '</div>');
    }
    while ($('tbody').length > 0) {
        $('tbody').eq(0).replaceWith('<div>' + $('tbody').eq(0).html() + '</div>');
    }
    while ($('th').length > 0) {
        $('th').eq(0).replaceWith('<h6>' + $('th').eq(0).html() + '</h6>');
    }

    // marquee title
    var x_marquee = $('marquee');
    var x_title = $("a[onclick]");
    for (var i = 0; i < x_marquee.length; ++i) {
        var title = x_marquee.eq(i).find('title').text();
        var title_onclick = x_title.eq(i).attr('onclick');
        x_marquee.eq(i).before('<hr><a href="#" onclick="' + title_onclick + '">' + title + '</a><div class="divider"></div>');
    }
    x_title.remove();

    // $('b').remove();
    while ($('b').length > 0) {
        $('b').eq(0).replaceWith("<p>" + $('b').eq(0).html() + "</p>");
    }

    $('marquee').addClass('card-panel');
    $('body').prepend("<div class='card-panel center-align'><div class='row'><h4>VITacademics Enhancement Suite</h4></div></div><div class='row center-align'><div class='col s6'><a href='https://vtop.vit.ac.in/student/stud_login.asp' class='btn'>Student Login</a></div><div class='col s6'><a href='https://vtop.vit.ac.in/parent/parent_login.asp' class='btn'>Parent Login</a></div></div>");

    $('.card-panel').addClass('hoverable');
});