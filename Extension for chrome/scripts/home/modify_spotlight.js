message_object = message_object()
        str = JSON.stringify(message_object, null, 4);

console.log(str)

$(document).ready(function() {
    console.log("ready!");
    $('table').hide();
    $('body').append('<div class="container><div class="row" id="main-row" ></div></div>');
    $('#main-row').append('<div class="col-md-4 text-center" id="attendance"><button type="button" class="btn btn-primary"><span class="text-right">Attendance<span></button></div>');
    $('#main-row').append('<div class="col-md-4 text-center" id="message"><button type="button" class="btn btn-primary"><span class="text-right">Messages<span></button></div>');
    $('#main-row').append('<div class="col-md-4 text-center" id="spotlight"><button type="button" class="btn btn-primary"><span class="text-right">Spotlight<span></button></div>');



    var table = $("table tbody table");

    //console.log(table)
    var element = table[1];


    var spotlight  = $(element).find('tbody');
    //console.log($(element).find('tbody'))

    spotlight_message = ''
    spotlight.find('tr').each(function (key , val) {
        var $tds =$(this).find('td')
        spotlight_message += $tds.html()
    });
        //console.log(spotlight_message)
    $('#spotlight').append('<marquee behaviour="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2" scrolldelay="75"  direction="up" width="100%" height="210px">'+spotlight_message+'</marquee>')
    $('#message').append('<div class="main-div"></div>')
    $('.main-div').wrap('<marquee behaviour="scroll" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2" scrolldelay="75" direction="up" width="100%" height="210px"></marquee>')

    // $('.main-div').append('<div class="sub-div"></div>')
    // console.log(message_object)
    for (var messages in message_object){
        // console.log(message_object[messages])
        str = JSON.stringify(message_object[messages], null, 4);
        // console.log(str)

        var  inner = message_object[messages]
        console.log(inner.length)

        $('.main-div').append('<div class="faculty">'+inner.Faculty+'</div>')
        $('.main-div').append('<div class="course">'+inner.Course+'</div>')
        $('.main-div').append('<div class="message">'+inner.Message.replace(/[^\x20-\x7E]/gmi, "")+'</div>')
        $('.main-div').append('<div class="sent">'+inner['Sent On']+'</div>')
        $('.main-div').append('<hr />')

    }
});


