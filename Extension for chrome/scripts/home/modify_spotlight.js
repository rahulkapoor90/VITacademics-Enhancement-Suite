$(function () {
    //Attendence
    $("<div class='card-panel'><div class='row' id='attendenceCard'></div></div>").insertBefore(".main_content");
    while ($("img[src='HTMLGraph/images/1x1_83C4FE.gif']").length > 0) {
        var imgTitle = $("img[src='HTMLGraph/images/1x1_83C4FE.gif']").eq(0).attr('title');
        imgTitle = imgTitle.split(":");
        // >75
        $("#attendenceCard").append("<div class='col'>" + imgTitle[0] + " " + "<b>" + imgTitle[1] + "%</b>" + "<div class='progress'><div class='determinate' style='width: " + imgTitle[1] + "%'></div></div></div>");
        $("img[src='HTMLGraph/images/1x1_83C4FE.gif']").eq(0).remove();
    }
    while ($("img[src='HTMLGraph/images/1x1_FFC19F.gif']").length > 0) {
        var imgTitlel75 = $("img[src='HTMLGraph/images/1x1_FFC19F.gif']").eq(0).attr('title');
        imgTitlel75 = imgTitlel75.split(":");
        // <75
        $("#attendenceCard").append("<div class='col' style='color:red'>" + imgTitlel75[0] + " " + "<b>" + imgTitlel75[1] + "%</b>" + "<div class='progress'><div class='determinate' style='width: " + imgTitlel75[1] + "%'></div></div></div>");
        $("img[src='HTMLGraph/images/1x1_FFC19F.gif']").eq(0).remove();
    }

    $(".main_content").remove();
});