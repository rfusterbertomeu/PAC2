import $ from "jquery";

$(document).ready(function () {
  $(".alert").hide();
  $(".formulari__contacte").submit(function (event) {
    event.preventDefault();
    $.ajax({
      url: "/",
      type: "POST",
      data: new FormData(this),
      processData: false,
      contentType: false,
      success: function () {
        $(".contacte__success").fadeIn();
        setTimeout($(".contacte__success").fadeOut(), 2000);
      },
      error: function (error) {
        $(".contacte__danger").fadeIn();
        setTimeout($(".contacte__danger").fadeOut(), 2000);
      }
    });
  });
});