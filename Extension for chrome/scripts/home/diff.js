a=[], marks={},url = "https://vtop.vit.ac.in/student/marks.asp?sem=WS";
//  To send AJAX request to url, then parse html to marks objects.
onload = function(){

    $.get(url, function(data){
        obj = {marks:{}};
        TRF=function(i, val){
            if(i>1){
                $(val).find('td').each(TDF);
                if(Object.keys(obj)){
                    a.push(Object.assign({},obj));
                }
            }
            obj = {marks:{}};
        }
        TDF=function(i, item){
            switch (i) {
                case 2:
                obj["code"] =   $(item).text();
                break;
                case 3:
                obj["learning"] = "CBL";
                break;
                case 4:
                obj["type"] = $(item).text();
                break;
            }
            if(i>4 && obj.type.includes("Theory")){
                switch (i) {
                    case 6:
                    obj.marks["CAT1"] =   $(item).text();
                    break;
                    case 8:
                    obj.marks["CAT2"] =   $(item).text();
                    break;
                    case 10:
                    obj.marks["quiz1"] =   $(item).text();
                    break;
                    case 12:
                    obj.marks["quiz2"] =   $(item).text();
                    break;
                    case 14:
                    obj.marks["quiz3"] =   $(item).text();
                    break;
                    case 16:
                    obj.marks["Assignment"] =   $(item).text();
                    break;
                }
            }
            if(i>4 && obj.type.includes("Lab")){
                switch (i) {
                    case 7:
                    obj.marks["LabCam"] =   $(item).text();
                    break;
                }
            }
        }
        //  For CBL courses.
        $(data).filter('table').first().find('table:nth-of-type(1)').find('tr').each(TRF);
        //--------
        rowSpan = parseInt($(data).filter('table').first().find('table:nth-of-type(2)').find('tr:nth-of-type(2)').find('td:first').attr('rowspan'));
        tA=[], O={}, A=[], obj={}, marks=[];
        TRF=function(i, val){
            if(!i){return}
            switch (i%rowSpan) {
                case 1:
                tA=[];
                $(val).find('td').each(title);
                break;
                case 3:
                $(val).find('td').each(weightage);
                break;
                case 0:
                $(val).find('td').each(score);
                chng();
                break;
            }
        }
        title = function(i, val){
            switch (i) {
                case 2:
                obj["code"]=$(val).text();
                break;
                case 3:
                obj["learning"] = "PBL";
                break;
                case 4:
                obj["type"]=$(val).text();
            }
            if(i>5){
                tA.push($(val).text());
            }
        }
        weightage = function(i, val){
            if(i){
                var t = $(val).text();
                A.push(Object.assign({}, {"title":tA[i-1], "weightage":t}));
            }
        }
        score = function(i, val){
            if(i){
                A[i-1]["score"] = $(val).text();
            }
        }
        chng = function(){
            a.push(Object.assign({}, obj, {"marks":A}));
            A=[];
            obj={};
        }
        $(data).filter('table').first().find('table:nth-of-type(2)').find('tr').each(TRF);
        reg = $('table:nth-of-type(2)').find('tr td:first').text().trim().split(" - ")[1]
        marks = {"Reg":reg, "marks":a}
        console.log(marks);
        diff(marks);
        store(marks);
    });
}

store = function(data){
    chrome.storage.local.set({"VITmarks":data}, function(){
        if(chrome.runtime.lastError){
            console.error("Error!");
            console.error(chrome.runtime.lastError);
        }
    });
}
notify = function(changes){
    var notifications=[];
    changes.forEach(function(val){
        if(isNaN(val.old) && !isNaN(val.new)){
            notifications.push({"title" : val.code, "message" : "Marks uploaded for "+val.eval+" - "+val.new});
        }
        else{
            notifications.push({"title" : val.code, "message" : "Marks changed for "+val.eval+" - "+val.new});
        }
    });
    chrome.runtime.sendMessage({"type": "notifications", "list":notifications});
}
diff = function(data){
    chrome.storage.local.get("VITmarks", function(obj){
        if(Object.keys(obj).length){
            console.warn(obj);
            //  Changes returned as array of strings.
            notify(check(obj.VITmarks.marks,data.marks));
        }
    });
}
//  Changes will be logged as "<CourseCode>-<Evaluation>"
check = function(P, Q){
    var changes = [], obj={"code":"", "eval":"", "old":"", "new":""};
    eval = ["Assignment", "CAT1", "CAT2", "quiz1", "quiz2", "quiz3"];
    P.forEach(function(val,i){
        if(val.learning=="PBL"){
            val.marks.forEach(function(item, j){
                if(item.score!=Q[i].marks[j].score){
                    changes.push({
                        "code": val.code,
                        "eval": val.title,
                        "old" : item.score,
                        "new" : Q[i].marks[j].score
                    });
                }
            });
        }
        else{
            eval.forEach(function(item){
                if(val.marks[item]!=Q[i].marks[item]){
                    changes.push({
                        "code": val.code,
                        "eval": item,
                        "old" : val.marks[item],
                        "new" : Q[i].marks[item]
                    });
                }
            });
        }
    })
    if(changes.length){
        console.log("new changes-");
        console.log(changes);
        //alert("New Change-"+changes);
    }
    else{
        console.log("No changes.");
    }
    return changes;
}
//  Only for testing.
//  For testing - Change in storage, try running in Extension/background console
var test = function(){
    chrome.storage.local.get("VITmarks", function(obj){
        if(chrome.runtime.lastError){
            console.error(chrome.runtime.lastError);
            return;
        }
        if(obj.VITmarks.marks[0].learning =="CBL" && obj.VITmarks.marks[0].type.includes("Theory")){
            obj.VITmarks.marks[0].marks.quiz1="1.23";
        }
        else if(obj.VITmarks.marks[0].learning =="CBL" && obj.VITmarks.marks[0].type.includes("Lab")){
            obj.VITmarks.marks[0].marks.LabCam="51.11";
        }
        else{
            obj.VITmarks.marks[0].marks[0].score="112";
        }
        chrome.storage.local.set(obj, function(){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError);
                return;
            }
        });
    })
}
