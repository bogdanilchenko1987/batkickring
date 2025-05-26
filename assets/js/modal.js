document.addEventListener("DOMContentLoaded", function () {
    const ageModalShown = localStorage.getItem("ageModalShown");
    const ageModal = new bootstrap.Modal(document.getElementById("ageModal"));
const mainContent = document.getElementById("main-content");

    if (!ageModalShown) {
      mainContent.style.display = "none"; // Hide the main content initially
      ageModal.show();
    }

    document.getElementById("confirmAgeBtn").addEventListener("click", function () {
      localStorage.setItem("ageModalShown", "true");
      ageModal.hide();
      mainContent.style.display = "block"; // Show the main content after confirmation
    });
  });