$(document).ready(function () {
    $("#block1").hover(function () {
        $("body").css("background-color", "blue");
    });

    $("#block2").hover(function () {
        $("body").css("background-color", "red");
    });

    $("#block3").hover(function () {
        $("body").css("background-color", "green");
    });
});
