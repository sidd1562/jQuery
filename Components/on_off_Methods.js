// $('#abc').click(function(){

// });

// $('#abc').mouseenter(function(){

// });

// above code both repit code to on() method both in one click set

// $(document).ready(function () {
//   $("#box").on("mouseover mouseout", function () {
//     $(this).toggleClass("first");
//   });
// });

$(document).ready(function () {
  $("#box").on({
    click: function () {
      $(this).css("background", "orange");
    },
    mouseenter: function () {
      $(this).css("background", "pink");
    },

    mouseout: function () {
      $(this).css("background", "lightblue");
    },
  });
  $("button").click(function () {
    $("#box").off("mouseenter mouseout");
  });
});
