$(document).ready(function () {
  $("#hide").click(function (e) {
    e.preventDefault();
    $("#box").hide(7000, function () {
      alert("Box is hidden");
    });
  });

  $("#show").click(function (e) {
    e.preventDefault();
    $("#box").show(7000, function () {
      alert("Box is shown");
    });
  });

  $("#toggle").click(function (e) {
    e.preventDefault();
    $("#box").toggle(7000, function () {
      alert("toggle");
    });
  });
});
