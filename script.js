$(document).ready(function () {
    alert("Hello world");
    $("#menu-close i").hide();
    $("#menu-open").click(function () {
        $(".mainul").removeClass("translate-y-0");
        $(".mainul").addClass("translate-y-1");
        $(".menu-open").hide();
        $("#menu-close").show();
    })
})