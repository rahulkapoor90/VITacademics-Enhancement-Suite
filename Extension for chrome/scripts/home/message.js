$(document).ready(function () {
    console.log("ready!");

    function getinfo() {

        var initial = $('marquee table').unwrap()
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

        console.log(spotlight);
        console.log(message);

        message.remove();



    }

    setTimeout(getinfo, 000);

});
