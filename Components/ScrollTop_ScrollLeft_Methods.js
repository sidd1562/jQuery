$(document).ready(function () {
  $(document).scroll(function () {
    $("#box").html("");
    $("#box").append("top : " + $(window).scrollTop());
    $("#box").append("<br>left : " + $(window).scrollLeft());

    var top = $(window).scrollTop();
    console.log(top);
    var left = $(window).scrollLeft();
    console.log(left);
  });

  $("#scrolltop").click(function () {
    $(window).scrollTop(200);
  });
  $("#scrollleft").click(function (e) {
    e.preventDefault();
    $(window).scrollLeft(100);
  });
});
