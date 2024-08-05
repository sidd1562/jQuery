$(document).ready(function () {
  $("#Append").click(function () {
    $("#box").append("<h2>Second</h2>");
  });
  $("#Prepend").click(function () {
    $("#box").prepend("<h2>First</h2>");
  });
});
