$(document).ready(function () {
  $("#after").click(function () {
    $("#box").after("<h3> After : Website in Script </h3>");
  });
  $("#before").click(function () {
    $("#box").before("<h3> Before : Website in Script </h3>");
  });
});
