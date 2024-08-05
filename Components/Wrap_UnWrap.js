$(document).ready(function () {
  $("#wrap").click(function (e) {
    e.preventDefault();

    $("#box p").wrap("<h2 id='test'></h2>");
  });

  $("#unwrap").click(function (e) {
    e.preventDefault();

    $("#box p").unwrap();
  });
});
