$(function () {
  let date = new Date().getFullYear();
  $("#year").text(date);
});

$(document).ready(function () {
  $(".floating-btn").click(function () {
    $(".container").remove();
    $("body").html(
      "<mark>What are you gonna do? &nbsp; Okay build yours I copy from you and Holla when you're done</mark>",
    );
  });
});
