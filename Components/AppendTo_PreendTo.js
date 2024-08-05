$(document).ready(function () {
  $("#appendto").click(function (e) {
    e.preventDefault();
    $("<h2>hello world appendto</h2>").appendTo("#box");
  });

  $("#prependto").click(function (e) {
    e.preventDefault();
    $("<h2>hello world prependto</h2>").prependTo("#box");
  });
});
