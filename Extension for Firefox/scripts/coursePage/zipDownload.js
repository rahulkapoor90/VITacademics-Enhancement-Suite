var script =
`
	console.log("started");
	jQuery ? console.log("Yes") : console.log("No");
	var res ;
	var count = 0;
	var links = [];
	var dZip = function(){

		var Promise = window.Promise;
		if (!Promise) {        Promise = JSZip.external.Promise;    }

		function urlToPromise(url) {
			return new Promise(function(resolve, reject) {
				JSZipUtils.getBinaryContent(url, function (err, data) {
					if(err) {
						reject(err);
					} else {
						resolve(data);
					}
				});
			});
		}

    	var zip = new JSZip();

        function fetchFile(url){

            fetch(url, {"credentials" : "include"})
            .then(function (response) {
                if (response.status === 200 || response.status === 0) {
                    res = response;
                    return Promise.resolve({ data : response.arrayBuffer(), name : response.headers.get("Content-Disposition").split(";")[1].split("Filename=")[1] })
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            })
            .then(function(val){
                zip.file(val.name, val.data);//.async("string");
                count++;
                if(count==links.length){
                    count=0;
                    downloadZIP();
                }
            });

        }

        links.forEach(function(e){
        	fetchFile(e);
        })

	       // when everything has been downloaded, we can trigger the dl
        function downloadZIP(){

    		zip.generateAsync({type:"blob"})
    		.then(function callback(blob) {

    			// see FileSaver.js
    			saveAs(blob, "Material.zip");

    			console.log("done !");
    		}, function (e) {
    			console.error(e);
    		});

        }

	}

	var b=\`<tr>
	<td bgcolor="#5A768D" width="22%" height="30"><font color="#FFFFFF">Download All Zip</font></td>
			  <td width="75" bgcolor="#EDEADE">  <input class="submit" type="submit" value="Download All Zip"> </td>
	</tr>\`
	b=$(b);
	$('table:nth-of-type(2)').find('tbody').prepend(b);
	$('input[name="downloadSelect"]').each(function(i, val){links.push($(val).attr('value'))});
	$(b).find('input:submit').click(dZip);
`;
function init(){
	var sJSZip = document.createElement('script');
	sJSZip.src = chrome.extension.getURL("scripts/zip/fileSaver.min.js");
	var sJSZipUtils = document.createElement('script');
	sJSZipUtils.src = chrome.extension.getURL("scripts/zip/jszip-utils.min.js");
	var sfileSaver = document.createElement('script');
	sfileSaver.src = chrome.extension.getURL("scripts/zip/jszip.js");
	var sjquery = document.createElement('script');
	sjquery.src = chrome.extension.getURL("scripts/jquery.min.js");
	var sZip = document.createElement('script');
	sZip.textContent = script;

	var s = (document.head||document.documentElement).appendChild(sjquery);
	(document.head||document.documentElement).appendChild(sJSZip);
	(document.head||document.documentElement).appendChild(sJSZipUtils);
	(document.head||document.documentElement).appendChild(sfileSaver);
	s.onload = function() {
		(document.head||document.documentElement).appendChild(sZip);
	}

}

onload = init();
