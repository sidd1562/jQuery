$(document).ready(function () {
  $("#clone").click(function (e) {
    e.preventDefault();
    $("#box h2").clone().prependTo("#box2");
    $("#box p").clone().appendTo("#box2");
  });
});
