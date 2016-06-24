/**
 * Created by RedLegend9 on 01-11-2015.
 */
function calc(o,n)
{
    var totelem = document.getElementById('t' + n);
    var totoelem= document.getElementById('tt' + n);
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
