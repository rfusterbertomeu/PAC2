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
      $("contacte__success").fadeIn();
      setTimeout($("contacte__success").fadeOut(), 2000);
    })
    .catch((error) => {
      $("contacte__danger").fadeIn();
      setTimeout($("contacte__danger").fadeOut(), 2000);
    });
};