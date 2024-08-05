$(document).ready(function () {
  $("#sname,#sclass ,#scountry").focus(function () {
    $(this).css("background-color", "yellow");
  });

  $("#sname,#sclass ,#scountry").blur(function () {
    $(this).css("background-color", "");
  });

  $("#scountry").change(function () {
    // $(this).css('background-color', 'green');

    var a = $(this).val();
    $("#test").html(a);
  });

  $("#sname,#sclass").select(function () {
    $(this).css("background-color", "pink");
  });

  $("#sform").submit(function () {
    alert("form submited");
  });
});

// $(document).ready(function () {
//   $("#sform").submit(function () {
//     var name = $("#sname").val();
//     var classname = $("#sclass").val();
//     var country = $("#scountry").val();
//     alert(" Name :" + name + " Class :" + classname + " Country :" + country);
//   });
// });

$(document).ready(function () {
  $("#sform").submit(function () {
    $("#sname").val("hellow");
    $("#sclass").val("dvklndsov");
  });
});
