$(document).ready(function () {
  $("#Add_Class").click(function () {
    $("#box, h1").addClass("first second");
  });
  $("#Remove_Class").click(function () {
    $("#box").removeClass(" second");
  });
  $("#Toggle_Class").click(function () {
    $("#box").toggleClass(" second");
  });
});
