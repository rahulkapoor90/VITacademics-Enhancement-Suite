$(document).ready(function () {
    var url = "https://vtop.vit.ac.in/student/marks.asp?sem=WS";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            scrapeData(this.responseText, function (data) {
                newMarks(data);
            });
        }
    }
    xhttp.open("GET", url, false);
    xhttp.send();
});

//Update marks and notifications
function newMarks(data) {
    chrome.storage.local.get(function (stored) {
        if (stored.marks == undefined) {
            chrome.storage.local.set({ marks: data });
        }
        else {
            var arr = new Array();
            var storMarks = stored.marks;
            for (i = 0; i < data.length; i++) {
                for (j = 0; j < storMarks.length; j++) {
                    if (storMarks[j]['name'] == data[i].name && storMarks[j]['title'] == data[i].title && storMarks[j]['scored'] != data[i].scored) {
                        arr.push(data[i]);
                        break;
                    }
                }
                if (i == data.length - 1) {
                    if (arr.length > 0) {
                        chrome.storage.local.set({ marks: data });
                        var obj1 = { "msg": "marks", "data": arr };
                        chrome.runtime.sendMessage(obj1);
                        break;
                    }
                }
            }
        }
    });
}
//To get all theory marks
function scrapeData(data, callback) {
    var body = $(data);
    var arr = new Array();
    var table = body.find('table').eq(0);
    for (i = 1; i < table.find("tr").length; i = i + 2) {
        if (table.find("tr").eq(i + 1).text().trim() !== '') {
            var name = table.find("tr").eq(i).find('td').eq(3).text().trim();
            for (j = 1; j < table.find("tr").eq(i + 1).find('tr').length; j++) {
                var obj = new Object;
                obj['title'] = table.find("tr").eq(i + 1).find('tr').eq(j).find('td').eq(1).text().trim();
                obj['max'] = table.find("tr").eq(i + 1).find('tr').eq(j).find('td').eq(2).text().trim();
                obj['status'] = table.find("tr").eq(i + 1).find('tr').eq(j).find('td').eq(4).text().trim();
                obj['scored'] = table.find("tr").eq(i + 1).find('tr').eq(j).find('td').eq(5).text().trim();
                obj['name'] = name;
                //Testing Section
                // if(obj['title']=='Digital Assignment'&&obj['name']=='Grundstufe Deutsch'){
                //     obj['scored']="42.00";
                // }
                // if(obj['title']=='CAT-II'&&obj['name']=='Grundstufe Deutsch'){
                //     obj['scored']="42.00";
                // }
                // if(obj['title']=='CAT-I'&&obj['name']=='Grundstufe Deutsch'){
                //     obj['scored']="41.00";
                // }
                // if(obj['title']=='CAT-I'&&obj['name']=='Grundstufe Deutsch'){
                //     obj['scored']="12.00";
                // }
                // if(obj['title']=='CAT-II'&&obj['name']=='Network and Communication'){
                //     obj['scored']="42.00";
                // }
                arr.push(obj);
            }
        }
    }
    callback(arr);
}
