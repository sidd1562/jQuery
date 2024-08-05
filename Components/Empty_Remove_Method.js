$(document).ready(function () {
  $("#Empty").click(function (e) {
    e.preventDefault();
    $("#box h2").empty();
  });

  $("#Remove").click(function (e) {
    e.preventDefault();
    $("#box").remove();
  });
});
