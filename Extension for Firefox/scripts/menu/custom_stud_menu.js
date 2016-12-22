$(function () {

    $('body').prepend('<div class="container quick-menu"><div class="row card-panel hoverable switch"><label class="col right"><b>Full menu</b><input id="menuSwitch" type="checkbox" checked><span class="lever"></span><b>Quick menu</b></label></div></div>');
    $('.container').append('<div class="hoverable" id="customMenu"></div>');
    $('table').hide();
    $('#customMenu').load(chrome.extension.getURL("custom_stud_menu.html"), function () {
        $('.collapsible').collapsible({
            accordion: false
        });
    });

    $('#menuSwitch').on('change', function () {
        $('#customMenu').toggle(400);
        $('table').toggle();
    });
});
