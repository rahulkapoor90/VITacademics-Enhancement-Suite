
//  Extra Curricular Course Messages.
var Messages;
Messages = {};
var elem = $('marquee').last().find('table').each(parse);

function parse(i,elem){
    if( $(elem).find('tr').first().find('b').text().includes('Extra Curricular') ){
        parseEC(elem);
    }

    if( $(elem).find('tr').first().find('b').text().includes('Class Faculty') ){
        parseC(elem);
    }

    if( $(elem).find('tr').first().find('b').text().includes('Faculty Advisor') ){
        parseA(elem);
    }
    console.warn(Messages);
    console.warn(Object.keys(Messages).length);
}

//  Parse Fac Ad.
function parseA(elem){
    var trs = $(elem).find('tr');

    var messages = [];

    $(elem).find('tr:nth-of-type(4n+3)').each(function(i,e){
        messages.push($(e).find('td').last().text().trim());
    });

    var timeStamps = [];

    $(elem).find('tr:nth-of-type(4n+4)').each(function(i,e){
        timeStamps.push($(e).find('td').last().text().trim());
    });

    var advisor = [];

    $(elem).find('tr:nth-of-type(4n+2)').each(function(i,e){
        advisor.push($(e).find('td').last().text().trim());
    });

    timeStamps.forEach(function(e, i){
        var obj = {};
        obj[e] = {
            advisor : advisor[i],
            message : messages[i]
        }
        combine(obj);
    });


/*
    console.warn(messages);
    console.warn(timeStamps);
    console.warn(advisor);*/
}

//  Parse Class Message
function parseC(elem){
    var trs = $(elem).find('tr');
    var count = $(elem).find('tr:nth-of-type(5n+4)').length;

    var messages = [];

    $(elem).find('tr:nth-of-type(5n+5)').each(function(i,e){
        messages.push($(e).find('td').last().text().trim());
    });

    var timeStamps = [];

    $(elem).find('tr:nth-of-type(5n+6)').each(function(i,e){
        timeStamps.push($(e).find('td').last().text().trim());
    });

    var faculty = [];

    $(elem).find('tr:nth-of-type(5n+3)').each(function(i,e){
        if(i==count)return;
        faculty.push($(e).find('td').last().text().trim());
    });

    var courses = [];

    $(elem).find('tr:nth-of-type(5n+4)').each(function(i,e){
        if(i==count)return;
        courses.push($(e).find('td').last().text().trim());
    });

    timeStamps.forEach(function(e, i){
        var obj = {};
        obj[e] = {
            faculty : faculty[i],
            course : courses[i],
            message : messages[i]
        }
        combine(obj);
    });

/*
    console.warn(messages);
    console.warn(timeStamps);
    console.warn(faculty);
    console.warn(courses);
*/
}

//  Parse Extra Curricular Message.
function parseEC(elem){

    var trs = $(elem).find('tr');
    var coordinator = $(trs[1]).find('td').last().text().trim();
    var course = $(trs[2]).find('td').last().text().trim();

    var messages = [];

    $(elem).find('tr:nth-of-type(3n+4)').each(function(i,e){
        messages.push($(e).find('td').last().text().trim());
    });

    var timeStamps = [];

    $(elem).find('tr:nth-of-type(3n+5)').each(function(i,e){
        timeStamps.push($(e).find('td').last().text().trim());
    });

    timeStamps.forEach(function(e, i){
        var obj = {};
        obj[e] = {
            coordinator : coordinator,
            course : course,
            message : messages[i]
        }
        combine(obj);
    })
/*    console.warn(coordinator);
    console.warn(course);
    console.warn(messages);
    console.warn(timeStamps);*/
}
//  Combine message with same timestamp. //I know won't happen. But just in case :P
function combine(obj){
    var temp = Object.keys(obj)[0];
    if(Messages[temp]){
        Messages[temp].push(obj[temp]);
        return;
    }
    Messages[temp]=obj[temp];
}

function check(old, current){

}
