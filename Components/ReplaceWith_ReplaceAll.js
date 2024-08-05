$(document).ready(function () {
  $("#replacewith").click(function (e) {
    e.preventDefault();
    $("#box p:nth-child(3)").replaceWith("new world create");
  });

  $("#replaceall").click(function (e) {
    e.preventDefault();
    $("<h4>reaplce all</h4>").replaceAll("#box p");
  });
});
