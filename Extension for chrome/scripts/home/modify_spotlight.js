$(function () {
    $('link[href="style.css"]').remove(); //remove remove default css file
    $('link[href="style2.css"]').remove();

    // Removing inline css
    $('font').contents().unwrap();
    $('u').contents().unwrap();
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

    // marquee title
    var x_marquee = $('marquee');
    var x_title = $("a[onclick]");
    for (var i = 0; i < x_marquee.length; ++i) {
        var title = x_marquee.eq(i).find('title').text();
        var title_onclick = x_title.eq(i).attr('onclick');
        x_marquee.eq(i).before('<hr><a href="#" onclick="' + title_onclick + '">' + title + '</a><div class="divider"></div>');
    }
    x_title.remove();

    $('marquee').addClass('card-panel');

    // Remove unnecessary elements
    $('br').remove();

    // Replace table and its childrens with div or appropriate tag
    while ($('table').length > 0) {
        $('table').eq(0).replaceWith('<div class="container-fluid">' + $('table').eq(0).html() + '</div>');
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
    while ($('b').length > 0) {
        $('b').eq(0).replaceWith("<p>" + $('b').eq(0).html() + "</p>");
    }

    //Attendence
    $("<div class='card-panel'><div class='row' id='attendenceCard'></div></div>").insertBefore(".main_content");
    while ($("img[src='HTMLGraph/images/1x1_83C4FE.gif']").length > 0) {
        var imgTitle = $("img[src='HTMLGraph/images/1x1_83C4FE.gif']").eq(0).attr('title');
        imgTitle = imgTitle.split(":");
        // >75
        $("#attendenceCard").append("<div class='col'>" + imgTitle[0] + " " + "<b>" + imgTitle[1] + "%</b>" + "<div class='progress'><div class='determinate' style='width: " + imgTitle[1] + "%'></div></div></div>");
        $("img[src='HTMLGraph/images/1x1_83C4FE.gif']").eq(0).remove();
    }
    while ($("img[src='HTMLGraph/images/1x1_FFC19F.gif']").length > 0) {
        var imgTitlel75 = $("img[src='HTMLGraph/images/1x1_FFC19F.gif']").eq(0).attr('title');
        imgTitlel75 = imgTitlel75.split(":");
        // <75
        $("#attendenceCard").append("<div class='col' style='color:red'>" + imgTitlel75[0] + " " + "<b>" + imgTitlel75[1] + "%</b>" + "<div class='progress'><div class='determinate' style='width: " + imgTitlel75[1] + "%'></div></div></div>");
        $("img[src='HTMLGraph/images/1x1_FFC19F.gif']").eq(0).remove();
    }

    $(".main_content").remove();

    $('.card-panel').addClass('hoverable');
});