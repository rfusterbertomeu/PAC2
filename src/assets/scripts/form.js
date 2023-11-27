import $ from "jquery";
$(".alert").hide();
var success = $(".contacte__success");
var fail = $(".contacte__fail");
const handleSubmit = (event) => {
  event.preventDefault();
  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => { success.fadeIn();
      setTimeout(function() {
        success.fadeOut();
      }, 2000);})
    .catch((error) => { success.fadeIn();
      setTimeout(function() {
        fail.fadeOut();
      }, 2000);});
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
