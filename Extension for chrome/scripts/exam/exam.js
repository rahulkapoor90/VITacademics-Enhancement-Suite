$(function () {
    //remove remove default css file
    $('link[href="style.css"]').remove();
    $('link[href="style2.css"]').remove();

    // remove inline attributes
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
    $('font').contents().unwrap();
    $('u').contents().unwrap();
    $('br').remove();

    $('table').eq(0).replaceWith('<div class="container">' + $('table').eq(0).html() + '</div>');

    $('table').addClass(function () {
        return 'centered hoverable highlight z-depth-1';
    });

    $('td[colspan="11"]:not(:last)').css('background-color', '#607D8B');
    $('td[colspan="11"]:not(:last)').css('color', 'white');

    while ($('b').length > 0) {
        $('b').eq(0).replaceWith('<div style="font-weight:bold;">' + $('b').eq(0).text() + '</div>');
    }
    $('center').eq(0).replaceWith('<h5>' + $('center').eq(0).text() + '</h5>');
});