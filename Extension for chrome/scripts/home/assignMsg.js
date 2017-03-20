$(document).ready(function () {
    //Fetches all the theory and lab assignments
    var url = "https://vtop.vit.ac.in/student/marks_da.asp?sem=WS";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            scrapeData(this.responseText, function (data) {
                //Fetches details of subjects
                eachAssignment(data, function (docs) {
                    //Fetches all assignments
                    dateAlert(docs); //Notification if the deadline is within 2 days
                    newAssignment(docs); // Notification if new assignment(s) is posted
                    newScore(docs); //Notification if marks of any assignment is updated
                });
            });
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
});


function newScore(data) {
    var arr = new Array();
    chrome.storage.local.get(function (stored) {
        if (stored.assignments == undefined) {
            chrome.storage.local.set({ assignments: data });
        }
        else {

            var storArr = stored.assignments;
            for (i = 0; i < data.length; i++) {
                var title = data[i].title;
                var score = data[i].score;
                for (j = 0; j < storArr.length; j++) {
                    if (title == storArr[j]['title']) {
                        if (score != storArr[j]['score']) {
                            arr.push(data[i]);
                        }
                        break;
                    }

                }
                if (i == data.length - 1) {
                    if (arr.length > 0) {
                        chrome.storage.local.set({ assignments: data });
                    }
                    var obj1 = { "msg": "score", "data": arr };
                    chrome.runtime.sendMessage(obj1);
                    break;
                }

            }
        }
    });
}

function newAssignment(data) {
    var arr = new Array();
    chrome.storage.local.get(function (stored) {
        if (stored.assignments == undefined) {
            chrome.storage.local.set({ assignments: data });
        }
        else {
            var storArr = stored.assignments;
            if (data.length != storArr.length) {
                for (i = 0; i < data.length; i++) {
                    var title = data[i].title;
                    var count = 0;
                    for (j = 0; j < storArr.length; j++) {
                        if (title != storArr[j]['title']) {
                            count++;

                        }
                        if (count == storArr.length) {
                            if (data[i]['isUploaded'] == 'Upload') {
                                arr.push(data[i]);
                                break;
                             }
                        }
                    }
                    if (i == data.length - 1) {
                        if (arr.length > 0) {
                            chrome.storage.local.set({ assignments: data });
                        }
                        var obj1 = { "msg": "new", "data": arr };
                        chrome.runtime.sendMessage(obj1);
                        break;
                    }
                }
            }
            else {
                // console.log("No new Assignments");
            }

        }
    });
}

function dateAlert(data) {
    var arr = new Array();
    var curDate = new Date();
    var curSec = curDate.getTime() * 1000;
    for (i = 0; i < data.length; i++) {
        var assignDate = new Date(data[i]['duedate']);
        var assignSec = assignDate.getTime() * 1000;
        if (assignDate != "Invalid Date") {
            var diff = assignSec - curSec;
            var diff = diff / (1000000 * 60 * 60 * 24 );
            if (diff < 2 && diff > 0) {
                if (data[i]['isUploaded'] == 'Upload') {
                    arr.push(data[i]);
                }
            }
        }
        if (i == data.length - 1) {
            var obj1 = { "msg": "date", "data": arr };
            chrome.runtime.sendMessage(obj1);
            break;
        }
    }
}

function eachAssignment(data, callback) {
    var arr = new Array();
    var l = data.length;
    for (j = 0; j < data.length; j++) {
        var url = 'https://vtop.vit.ac.in/student/marks_da_process.asp?sem=WS&classnbr=' + data[j].classnbr + '&crscd=' + data[j].crscd + '&crstp=' + data[j].crstp + '&daprocmd=Process';
        var xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var body = $(this.responseText);
                var table = body.find('table').eq(1);
                for (i = 2; i < table.find('tr').length - 1; i++) {
                    var obj = new Object;
                    if (data[j].crstp == 'ETH' || data[j].crstp == 'TH') {
                        obj['title'] = table.find('tr').eq(i).find('td').eq(1).text().trim();
                        obj['duedate'] = table.find('tr').eq(i).find('td').eq(2).text().trim();
                        obj['status'] = table.find('tr').eq(i).find('td').eq(6).text().trim();
                        obj['score'] = table.find('tr').eq(i).find('td').eq(7).text().trim();
                        obj['isUploaded'] = table.find('tr').eq(i).find('td').eq(5).find('input').eq(0).val().trim();
                    }
                    else if (data[j].crstp == 'ELA' || data[j].crstp == 'LA') {
                        obj['title'] = table.find('tr').eq(i).find('td').eq(1).text().trim();
                        obj['duedate'] = "Semester End";
                        obj['status'] = table.find('tr').eq(i).find('td').eq(5).text().trim();
                        obj['score'] = table.find('tr').eq(i).find('td').eq(6).text().trim();
                        obj['isUploaded'] = table.find('tr').eq(i).find('td').eq(4).find('input').eq(0).val().trim();
                    }
                    obj['crstp'] = data[j].crstp;
                    obj['crscd'] = data[j].crscd;
                    obj['crsnm'] = data[j].crsnm;
                    arr.push(obj);
                }
            }
        }
        xhttp1.open("GET", url, false);
        xhttp1.send();
        if (j == l - 1) {
            //Testing Section
            // arr.push({ 'title': "Networking  Standards", 'duedate': "16-FEB-2017", "isUploaded": "Upload", "status": "", "score": "10", "crstp": "ETH", "crscd": "CSE1004", "crsnm": "Network and Communication" });
            // arr.push({ 'title': "Something new to show", 'duedate': "25-MAR-2017", "isUploaded": "Upload", "status": "", "score": "", "crstp": "ETH", "crscd": "CSE1004", "crsnm": "Network and Communication" });
            // arr.push({ 'title': "Networking  Standards", 'duedate': "30-MAR-2017", "isUploaded": "Upload", "status": "", "score": "", "crstp": "ETH", "crscd": "CSE1004", "crsnm": "Network and Communication" });
            callback(arr);
            break;
        }
    }

}

function scrapeData(data, callback) {
    var arr = new Array();
    var body = $(data);
    var table = body.find('table');
    for (i = 1; i < table.find('tr').length; i++) {
        var obj = new Object;
        obj['classnbr'] = table.find('tr').eq(i).find('td').eq(1).text().trim();
        obj['crscd'] = table.find('tr').eq(i).find('td').eq(2).text().trim();
        obj['crsnm'] = table.find('tr').eq(i).find('td').eq(3).text().trim();
        obj['crstp'] = table.find('tr').eq(i).find('td').eq(4).text().trim();
        if (obj.crstp == 'Embedded Theory') {
            obj.crstp = 'ETH';
        }
        else if (obj.crstp == 'Embedded Lab') {
            obj.crstp = 'ELA';
        }
        else if (obj.crstp == 'Theory Only') {
            obj.crstp = 'TH';
        }
        else if (obj.crstp == 'Lab Only') {
            obj.crstp = 'LA';
        }
        else {
            obj.crstp = 'DONT';
        }
        if (obj.crstp != 'DONT') {
            arr.push(obj);
        }
        if (i == table.find('tr').length - 1) {
            callback(arr);
            break;
        }
    }
}
