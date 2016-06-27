$(document).ready(function () {
    console.log("ready!");





    initial = $('marquee table').unwrap()



    function getinfo() {

        console.log(initial);

        //        message = document.getElementsByTagName('span');
        //        message_length =message.length -1;
        //        message_body = message[message_length];
        //        console.log(message_body);
        //
        //        var child = message_body.children[0];
        //
        //        console.log(child);
        //
        //        child.children().remove().appendTo('span');
        //
        //        marquee.remove();
        var spotlight = initial[0];
        var message = initial[1];
        $(spotlight).addClass('help');
        $(message).addClass('some');
        console.log(spotlight);
        console.log(message);

        //message.remove();
        $(spotlight).hide();


        var spotlight_click = $('table a')[0];
        console.log(spotlight_click);
        spotlight_click = $(spotlight_click).removeAttr('onclick');




        $(spotlight_click).on('click', 'a', function() {
            console.log("Hello inside")
        });




        console.log(spotlight_click);

        if ($(spotlight_click[display = 'none'])) {
            console.log("Hello");
            //$(spotlight).show();
//            spotlight_click = $(spotlight_click).attr('onclick',function(){
//                console.log("Went inside")
//            });

        }


    }

    setTimeout(getinfo, 5000);

});
