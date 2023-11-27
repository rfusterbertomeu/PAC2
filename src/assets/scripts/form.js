import $ from "jquery";

$(document).ready(function () {
  $(".alert").hide();
  $(".formulari__contacte").submit(function (event) {
    event.preventDefault();
    var success = $(".contacte__success");
    var fail = $(".contacte__fail");
    $.ajax({
      url: "/",
      type: "POST",
      data: new FormData(this),
      success: function () {
        console.log("success");
        success.fadeIn();
        setTimeout(function() {
          success.fadeOut();
        }, 2000);
      },
      error: function (error) {
        console.log(error);
        fail.fadeIn();
        setTimeout(function() {
          fail.fadeOut();
        }, 2000);
      }
    });
  });
});