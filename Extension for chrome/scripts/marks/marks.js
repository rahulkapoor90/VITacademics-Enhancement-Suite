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

    $('table').eq(0).replaceWith('<table>' + $('table').eq(0).html() + '</table>');

    $('table').eq(1).replaceWith('<table>' + $('table').eq(1).html() + '</table>');

    $('table').addClass(function () {
        return 'centered hoverable highlight z-depth-1';
    });

    var i = $('tr').length - 1;
    while (i > 0) {
        if ($('tr').eq(i).children('td').length == 10) {
            $('tr').eq(i).css('background-color', '#607D8B');
            $('tr').eq(i).css('color', 'white');
        }
        i--;
    }

    while ($('b').length > 0) {
        $('b').eq(0).replaceWith('<h5>' + $('b').eq(0).text() + '</h5>');
    }
    $('center').eq(0).replaceWith('<h4>' + $('center').eq(0).text() + '</h4>');
});