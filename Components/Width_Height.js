$(document).ready(function () {
  $("#width").click(function (e) {
    e.preventDefault();
    $("#box").width("400px");
    console.log("width : " + $("#box").width());
    console.log("innerWidth : " + $("#box").innerWidth());
    console.log("OutertWidth : " + $("#box").outerWidth());
    console.log("OuterWidth(true) : " + $("#box").outerWidth(true));
  });

  $("#height").click(function (e) {
    e.preventDefault();
    $("#box").height("500px");
    console.log("height : " + $("#box").height());
    console.log("innerHeight : " + $("#box").innerHeight());
    console.log("outerHeight : " + $("#box").outerHeight());
    console.log("outerHeight(true) : " + $("#box").outerHeight(true));
  });
});
