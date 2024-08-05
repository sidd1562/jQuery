$(document).ready(function () {
  $("#position").click(function (e) {
    e.preventDefault();
    $("#box h2").position({ top: 150 ,left: 200 });
    var position = $("#box h2").position();
    var top = position.top;
    var left = position.left;
    // console.log("top : " + top + " left " + left);
    console.log(position);
  });

  $("#offset").click(function (e) {
    e.preventDefault();

    $("#box h2").offset({ top: 0, left: 0 });

    var offset = $("#box h2").offset();
    var top = offset.top;
    var left = offset.left;
    console.log(offset);
    // console.log("top : " + top + " left " + left);
  });
});
