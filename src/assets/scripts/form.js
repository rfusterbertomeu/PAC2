import $ from "jquery";

$(document).ready(function () {
  $(".alert").hide();
  $("form[name='formulari__contacte']").submit(function (event) {
    event.preventDefault();

    var success = $(".contacte__success");
    var fail = $(".contacte__fail");
    console.log(event);
    console.log(success);
    $.ajax({
      url: "/",
      type: "POST",
      data: new FormData(event.target)
    }).done(function () {
        console.log("success");
        success.fadeIn();
        setTimeout(function() {
          success.fadeOut();
        }, 2000);
      }).fail(function (error) {
        console.log(error);
        fail.fadeIn();
        setTimeout(function() {
          fail.fadeOut();
        }, 2000);
      });
  });
});