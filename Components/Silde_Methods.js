$(document).ready(function () {
  $("#slideup").click(function (e) {
    e.preventDefault();
    $("#box").slideUp(1230);
  });
  $("#slidedown").click(function (e) {
    e.preventDefault();
    $("#box").slideDown(2351,function(){
        alert("Slide down complete");
    });
  });
  $("#slidetoggle").click(function (e) {
    e.preventDefault();
    $("#box").slideToggle(1235);
  });
});
