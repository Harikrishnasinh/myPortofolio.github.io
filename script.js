$(document).ready(function () {
  $(".menu-close").hide();
  console.log("Hello World");
  // open-main-menu
  $(".menu-open").click(function () {
    console.log("menu-open clicked");
    $("nav ul").removeClass("hide-menu");
    $("nav ul").addClass("show-menu");
    $(".menu-open").hide();
    $(".menu-close").show();
  });
  // close-menu
  $(".menu-close").click(function () {
    console.log("menu-open clicked");
    $("nav ul").removeClass("show-menu");
    $("nav ul").addClass("hide-menu");
    $(".menu-close").hide();
    $(".menu-open").show();
  });
});
