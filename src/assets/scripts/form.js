import $ from "jquery";

$(function() {
    
  $(".form__alerta").hide();
  var formulari = $(".form")
  var success = $(".form__alerta--success");
  var fail = $(".form__alerta--fail");

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => { 
      success.fadeIn();
      setTimeout(function() {
        success.fadeOut();
      }, 5000);
        formulari.trigger("reset");
    })    
    .catch((error) => { 
      success.fadeIn();
      setTimeout(function() {
        fail.fadeOut();
      }, 5000);
      formulari.trigger("reset");
    });
  };

  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);
});