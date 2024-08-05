$(document).ready(function () {
  $("#fadeout").click(function (e) {
    e.preventDefault();

    $("#box").fadeOut(2000, function () {
      alert("fadeOut done");
    });
  });

  $("#fadein").click(function (e) {
    e.preventDefault();

    $("#box").fadeIn(2000, function () {
      alert("fadeIn done");
    });
  });

  $("#fadeto").click(function (e) {
    e.preventDefault();

    $("#box").fadeTo(2000, 0.05, function () {
      alert("fadeTo done");
    });
  });
});
