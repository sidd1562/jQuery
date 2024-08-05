$(document).ready(function () {
  var a = $("#box").html();
  console.log(a);

  var a = $("#box").text();
  console.log(a);

  var a = $("#box").attr("class");
  console.log(a);
});

// using in form
// $(document).ready(function () {
//     $("#sform").submit(function () {
//       var name = $("#sname").val();
//       var classname = $("#sclass").val();
//       var country = $("#scountry").val();
//       alert(" Name :" + name + " Class :" + classname + " Country :" + country);
//     });
//   });
