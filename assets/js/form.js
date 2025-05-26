document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("emailInput");
    const formContainer = document.getElementById("formContainer");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault();


      formContainer.classList.add("d-none");
      successMessage.classList.remove("d-none");


      setTimeout(() => {
        formContainer.classList.remove("d-none");
        successMessage.classList.add("d-none");
        form.reset();
      }, 3000);
    });
  });