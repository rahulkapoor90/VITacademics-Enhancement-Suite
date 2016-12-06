var s = document.createElement('script');
s.src = chrome.extension.getURL('calc.js');
(document.head || document.documentElement).appendChild(s);
s.onload = function () {
    s.parentNode.removeChild(s);
};

function fixVITCode() {
    var d = document.getElementsByTagName("table")[4];
    d = d.getElementsByTagName('tbody')[0]
    d = d.getElementsByTagName('tr');
    console.log(d);
    for (var i = 1; i < d.length; i++) {
        var formTag = d[i].getElementsByTagName('form')[0];
        temp = formTag.outerHTML.split('><');
        temp['0'] += '>';
        temp['1'] = '<' + temp['1'];
        var viewCol = d[i].getElementsByTagName('td')[10];
        viewCol.innerHTML = temp['0'] + viewCol.innerHTML + temp['1'];
    }
}

function init() {
    fixVITCode();
    var d = document.getElementsByTagName("table")[4];
    d = d.getElementsByTagName('tr');
    for (var i = 0; i < d[0].childNodes.length; i++) {

        var e = document.createElement("button");
        e.value = "+";
        e.innerHTML = "+";
        e.setAttribute('onclick', "calc(3," + i + ")");
        e.setAttribute('class', "btn-floating btn waves-effect waves-light green");

        var h = document.createElement("button");
        h.value = "-";
        h.innerHTML = "-";
        h.setAttribute('onclick', "calc(4," + i + ")");
        h.setAttribute('class', "btn-floating btn waves-effect waves-light red");

        var g = document.createElement("button");
        g.value = "+";
        g.innerHTML = "+";
        g.setAttribute('onclick', "calc(1," + i + ")");
        g.setAttribute('class', "btn-floating btn waves-effect waves-light green");

        var f = document.createElement("button");
        f.value = "-";
        f.innerHTML = "-";
        f.setAttribute("onclick", "calc(2," + i + ")");
        f.setAttribute('class', "btn-floating btn waves-effect waves-light red");

        d[i].innerHTML += d[i].getElementsByTagName("td")[10].outerHTML;
        if (i == 0) {
            d[i].getElementsByTagName("td")[11].childNodes[0].childNodes[0].textContent = 'Check Your Attendance';
        } else {
            d[i].getElementsByTagName("td")[11].innerHTML = "<div class='AttendDiv'>" + h.outerHTML + "<span id='at" + i + "' class='AttendMissLabel'>Attend:0</span>" + e.outerHTML + "</div><div>" + f.outerHTML + "<span id='mi" + i + "' class='AttendMissLabel'>Miss: 0</span>" + g.outerHTML + "</div>";
            d[i].getElementsByTagName("td")[6].innerHTML = "<p id='ao" + i + "'>" + d[i].getElementsByTagName("td")[6].innerHTML + "</p><p id='a" + i + "'>" + d[i].getElementsByTagName("td")[6].innerHTML;
            d[i].getElementsByTagName("td")[8].innerHTML = "<p id='po" + i + "'>" + d[i].getElementsByTagName("td")[8].innerHTML + "</p>" + "<p id='p" + i + "'>" + d[i].getElementsByTagName("td")[8].innerHTML + "</p>";
            d[i].getElementsByTagName("td")[7].innerHTML = "<p id='tt" + i + "'>" + d[i].getElementsByTagName("td")[7].innerHTML + "</p>" + "<p id='t" + i + "'>" + d[i].getElementsByTagName("td")[7].innerHTML + "</p>";
        }
    }
}
onload = init();