s = document.getElementsByTagName("a");

for (i=0; i<s.length; i++)
{
	var box = document.createElement("input");

	var att = document.createAttribute("type");
	att.value = "checkbox";
	box.setAttributeNode(att);

	var att = document.createAttribute("name");
	att.value = "downloadSelect";
	box.setAttributeNode(att);

	var att = document.createAttribute("value");
	att.value = s[i].href;
	box.setAttributeNode(att);

	var att = document.createAttribute("class");
	att.value = "sexy-input";
	box.setAttributeNode(att);

	var att = document.createAttribute("data-filename");
	att.value = s[i].innerText;
	box.setAttributeNode(att);

	s[i].parentNode.insertBefore(box, s[i]);
}

var script = document.createElement("script");

var script_content = `
//document.getElementById("madeby").style.visibility = "visible";
var checkedBoxes = document.querySelectorAll('input[name=downloadSelect]:checked');
var links = [];
for (i = 0; i<checkedBoxes.length; i++)
{
	links.push(checkedBoxes[i].value);
	// links[checkedBoxes[i].getAttribute("data-filename")] = checkedBoxes[i].value;
}
subject_name = document.getElementsByTagName("table")[1].getElementsByTagName("td")[8].innerText;
teacher_name = document.getElementsByTagName("table")[1].getElementsByTagName("td")[12].innerText;
window.postMessage({links: links, subject: subject_name, teacher: teacher_name}, '*');
`

script.textContent = "function download(){\n" + script_content + "}";

(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);


var button = document.createElement("input");

var att = document.createAttribute("type");
att.value = "button";
button.setAttributeNode(att);

var att = document.createAttribute("class");
att.value = "submit2";
button.setAttributeNode(att);

var att = document.createAttribute("name");
att.value = "Download Files";
button.setAttributeNode(att);

var att = document.createAttribute("value");
att.value = "Download Files";
button.setAttributeNode(att);

var att = document.createAttribute("onclick");
att.value = "download()";
button.setAttributeNode(att);

document.getElementsByName("courseplan")[0].appendChild(button)



// getting checked urls from injected code to the contect script
window.addEventListener('message', function(event) {
  // Only accept messages from same frame
  if (event.source !== window) {
    return;
  }

  var message = event.data;

  // Only accept messages that we know are ours
  if (typeof message !== 'object' || message === null || !message.links) {
    return;
  }
  //	request type
  //message.type = "rename";
  chrome.runtime.sendMessage(message);
  // console.log(message.links);
});

//**    for the download all button.

var init = function(){
	var links = [];
	var dA = function(){
		alert("VES will now download all the study material available.");
		var subject_name = document.getElementsByTagName("table")[1].getElementsByTagName("td")[8].innerText;
		var teacher_name = document.getElementsByTagName("table")[1].getElementsByTagName("td")[12].innerText;
		chrome.runtime.sendMessage({
			"type":"rename", "links": links, "subject": subject_name, "teacher": teacher_name
		})
	}
	var a=`<tr>
	<td bgcolor="#5A768D" width="22%" height="30"><font color="#FFFFFF">Download All Contents</font></td>
			  <td width="75" bgcolor="#EDEADE">  <input class="submit" type="submit" value="Download All"> </td>
	</tr>`
	a=$(a);
	$('table:nth-of-type(2)').find('tbody').prepend(a);
	$('input[name="downloadSelect"]').each(function(i, val){links.push($(val).attr('value'))});
	$(a).find('input:submit').click(dA);
}
onload = init();
