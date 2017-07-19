$(function () {
    // autoCaptcha feature
    var captchaText = $("#captchaCheck").siblings("label").eq(0).text();
    $("#captchaCheck").val(captchaText);
    $("#captchaCheck").siblings("i.form-control-feedback").eq(0).addClass("glyphicon glyphicon-ok").show();
    $("#captchaCheck").parent(".form-group").addClass("has-success");
    $(".box-footer").eq(0).before('<div class="col-sm-12 text-center" style="margin-bottom:15px;">❤ AutoCaptcha by VES ❤</div>');
});