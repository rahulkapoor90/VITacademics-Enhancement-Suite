var init = function(){
    var params=[],a="", last={}, url="https://vtop.vit.ac.in/student/attn_report_details.asp", counter=0;
    var cb = function(i, val){
        $(val).parent().find('input').each(cbb);
        params.push(a);
        a="";
        counter++;
    }
    var cbb = function(i, val){
        a+=val.name+"="+val.value+"&";
        //console.log(val);
    }
    var req = function(val, i){
        var d="", obj={};
        $.post(url, val, function(data){
            d=($(data).filter('table').find('table:nth-of-type(2)').find('tr:nth-last-of-type(1)').find('td:nth-of-type(2)').text().trim());
            obj[i]=d;
            last[i]=d;
            if(Object.keys(last).length==counter){
                addC(last);
            }
        });
    }
    var addC = function(data){
        $('table:nth-of-type(2)').find('tr').each(function(i, val){
            if(i){
                var elem = $("<td></td>").text(data[i-1].toString());
                $(val).append(elem);
            }
            else{
                var elem = $("<td><font color='#FFFFFF'><b>Attendance Last&nbspPosted</b></font></td>");
                $(val).append(elem);
            }
        })
    }
    $('input:submit').each(cb);
    params.forEach(req);
}

if(window.location.search.includes("todt") && window.location.search.includes("fmdt")){
    init();
}
