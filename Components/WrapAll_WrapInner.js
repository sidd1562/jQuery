$(document).ready(function () {
  $("#WrapAll").click(function (e) {
    e.preventDefault();
    $("p").wrapAll("<div id='test'><div>");
  });

  $("#WrapInner").click(function (e) {
    e.preventDefault();
    $("h1").wrapInner("<span id='red'> </span>");
  });
});
