function calc(o,n)
{
    var totelem = document.getElementById('t' + n);
    var totoelem= document.getElementById('to' + n);
    var tot = (parseInt(totelem.textContent));
    var toto = (parseInt(totoelem.textContent));
    var attoelem = document.getElementById('ao' + n);
    var attelem = document.getElementById('a' + n);
    var atto = parseInt(document.getElementById('ao' + n).textContent);
    var att = parseInt(document.getElementById('a' + n).textContent);
    var perelem = document.getElementById('p' + n);
    var mielem= document.getElementById('mi' + n);
    var mi = parseInt(mielem.textContent.slice(5));
    var atelem= document.getElementById('at' + n);
    var at=parseInt(atelem.textContent.slice(7));
    switch (o)
    {
        case 1:   tot+=1;
                    mielem.textContent="Miss:"+(mi+1);
                    break;
        case 2:   if(mi)
                    {
                        tot-=1;
                        mielem.textContent="Miss:"+(mi-1);
                    }
                    break;
        case 3:     tot+=1;
                    att+=1;
                    atelem.textContent="Attend:"+(at+1);
                    break;
        case 4:   if(at)
                    {
                        att-=1;
                        tot-=1;
                        atelem.textContent="Attend:"+(at-1);
                    }
                    break;
    }
    var newp = Math.ceil((att / tot) * 100);
    totelem.textContent=tot;
    attelem.textContent=att;
    perelem.textContent = newp + '%';
    //alert("yeah!");
}
var readyState=setInterval(function(){
    if(document.readyState==='complete')
    {
        clearInterval(readyState);
        init();
    }
},10);

function init()
{
    var d = document.getElementsByTagName("table")[3];
    d = d.childNodes[0];
    for (var i = 0; i < d.childNodes[0].childNodes.length; i++) {

        var e = document.createElement("button");
        e.value = "+";
        e.innerHTML = "+";
        e.setAttribute('onclick', "calc(3," + i + ")");

        var h = document.createElement("button");
        h.value = "-";
        h.innerHTML = "-";
        h.setAttribute('onclick', "calc(4," + i + ")");

        var g = document.createElement("button");
        g.value = "+";
        g.innerHTML = "+";
        g.setAttribute('onclick', "calc(1," + i + ")");

        var f = document.createElement("button");
        f.value = "-";
        f.innerHTML = "-";
        f.setAttribute("onclick", "calc(2," + i + ")");

        d.childNodes[i].innerHTML += d.childNodes[i].getElementsByTagName("td")[10].outerHTML;
        if (i == 0) {
            d.childNodes[i].getElementsByTagName("td")[11].childNodes[0].childNodes[0].textContent = 'Check!';
        }
        else {
            d.childNodes[i].getElementsByTagName("td")[11].innerHTML =  e.outerHTML+h.outerHTML+"<p id='at"+i+"'>Attend:0</p>"+ g.outerHTML+f.outerHTML+ "<p id='mi"+i+"'>Miss: 0</p>";
            d.childNodes[i].getElementsByTagName("td")[6].innerHTML = "<p id='ao" + i + "'>" + d.childNodes[i].getElementsByTagName("td")[6].innerHTML + "</p><p id='a" + i + "'>" + d.childNodes[i].getElementsByTagName("td")[6].innerHTML;
            d.childNodes[i].getElementsByTagName("td")[8].innerHTML = "<p id='po" + i + "'>" + d.childNodes[i].getElementsByTagName("td")[8].innerHTML + "</p>" + "<p id='p" + i + "'>" + d.childNodes[i].getElementsByTagName("td")[8].innerHTML + "</p>";
            d.childNodes[i].getElementsByTagName("td")[7].innerHTML = "<p id='to" + i + "'>" + d.childNodes[i].getElementsByTagName("td")[7].innerHTML + "</p>" + "<p id='t" + i + "'>" + d.childNodes[i].getElementsByTagName("td")[7].innerHTML + "</p>";
            var x=d.childNodes[i].childNodes[10].outerHTML.split(">")[0]+">";
            var x1=d.childNodes[i].getElementsByTagName("td")[10].innerHTML;
            x1=x+x1+"</form>";
            d.childNodes[i].getElementsByTagName("td")[10].innerHTML=x1;
        }
    }
}
