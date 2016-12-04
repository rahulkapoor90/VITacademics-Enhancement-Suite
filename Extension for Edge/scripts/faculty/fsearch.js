$("input, select, textarea").attr("autocomplete", "off");
$("input[name='faculty']").on("change input", function(event){
    a($("input[name='faculty']").val());
})

var AJAXReq;

function a(fName){
    if(fName){
        req(fName);
    }
    else{
        $('#txtHint').html('');
    }
}

function req(fName){
    if(AJAXReq && AJAXReq.readyState != 4){
        AJAXReq.abort();
    }
    var xhr = new XMLHttpRequest();
    var url = "getfacdet.asp?fac="+fName;
    xhr.onreadystatechange=function(){
        $('#txtHint').html('<img src="https://res.cloudinary.com/dadfowug4/image/upload/v1479314945/loading_bkeixv.gif">');
        if (xhr.readyState==4 && xhr.status==200){
            $('#txtHint').html(xhr.responseText);
        }
    }
    xhr.open("GET",url,true);
    xhr.send();
    AJAXReq = xhr;
}
