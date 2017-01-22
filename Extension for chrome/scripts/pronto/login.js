var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var mynow = new Date();
var mydate = mynow.getDate();
var mymonth = mynow.getMonth();
var myday = mynow.getDay();
var myyear = mynow.getFullYear();
var myhour = mynow.getHours();
var dateStr = new String(dayArray[myday]+" "+monthArray[mymonth]+" "+mydate+", "+myyear);
function formCheck(){
  if(!document.forms[0].userId.value){
    	alert("Please enter your username to log in.");
      	document.forms[0].userId.focus();	return false;
      }	if(!document.forms[0].password.value){
        	alert("Please enter your password to log in.");
          	document.forms[0].password.focus();
            	return false;
            	}
              return true;}
              
var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://res.cloudinary.com/dadfowug4/image/upload/v1479304973/favicon_rkdd0w.ico';
    document.getElementsByTagName('head')[0].appendChild(link);

document.getElementsByTagName('body')[0].style.display="none";
document.title = "VOLSBB";
var nav = document.getElementsByTagName('body')[0];
var logindiv = document.createElement('div');
logindiv.setAttribute('class','login');
var htext = document.createElement('h1');
var t1 = document.createTextNode('Login');
htext.appendChild(t1);
var form = document.createElement('form');
form.setAttribute('method','POST');
form.setAttribute('action','/cgi-bin/authlogin?URI=https://www.google.co.in/');
var inp = document.createElement('input');
inp.setAttribute('type','text');
inp.setAttribute('name','userId');
inp.setAttribute('placeholder','Username');
inp.setAttribute('required','required');

var inp1 = document.createElement('input');
inp1.setAttribute('type','password');
inp1.setAttribute('name','password');
inp1.setAttribute('placeholder','Password');
inp1.setAttribute('required','required');

var inp2 = document.createElement('input');
inp2.setAttribute('type','hidden');
inp2.setAttribute('name','serviceName');
inp2.setAttribute('value','ProntoAuthentication');

var button = document.createElement('input');
button.setAttribute('type','submit');
button.setAttribute('name','submit22');
button.setAttribute('class','btn btn-primary btn-block btn-large');
var t2 = document.createTextNode('Let me in.');
button.appendChild(t2);
var htag1 = document.createElement('h1');
var t3 = document.createTextNode('Secure Pronto Authentication [BETA]');
htag1.appendChild(t3);

form.appendChild(inp);
form.appendChild(inp1);
form.appendChild(inp2);
form.appendChild(button);
logindiv.appendChild(htag1);
logindiv.appendChild(form);

nav.parentElement.appendChild(logindiv);
