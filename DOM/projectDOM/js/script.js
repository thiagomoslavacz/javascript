// Header Icon User
document.querySelector("#user").addEventListener("mouseenter", () => {
  let box = document.querySelector("#box");
  box.style.opacity = "1";
});

document.querySelector("#user").addEventListener("mouseleave", () => {
  let box = document.querySelector("#box");
  box.style.opacity = "0";
});

// Burger and Recipe
document.addEventListener("DOMContentLoaded", function () {
  let burger = document.querySelector("#burger");
  let recipe = document.querySelector("#recipe");

  burger.addEventListener("click", function () {
    recipe.style.zIndex = "2";
    recipe.style.opacity = "1";
  });

  recipe.addEventListener("click", function () {
    recipe.style.zIndex = "-1";
    recipe.style.opacity = "0";
  });
});

// Form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  const verifications = document.querySelectorAll(".verification");
  const successMessage = document.querySelector("#successMessage");

  const usernameField = document.querySelector("#usernameField");
  const emailField = document.querySelector("#emailField");
  const passwordField = document.querySelector("#passwordField");

  const userButton = document.querySelector("#userButton");
  const emailButton = document.querySelector("#emailButton");
  const passwordButton = document.querySelector("#passwordButton");

  usernameField.style.display = "block";
  emailField.style.display = "none";
  passwordField.style.display = "none";

  document
    .querySelector("#username")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        userButton.click();
      }
    });

  document
    .querySelector("#email")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        emailButton.click();
      }
    });

  document
    .querySelector("#password")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        passwordButton.click();
      }
    });

  userButton.addEventListener("click", function () {
    const username = document.querySelector("#username").value.trim();
    if (username !== "") {
      usernameField.style.display = "none";
      emailField.style.display = "block";
      hideVerificationMessages();
    } else {
      showErrorMessage("Please enter a username.", usernameField);
    }
  });

  emailButton.addEventListener("click", function () {
    const email = document.querySelector("#email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== "" && emailRegex.test(email)) {
      emailField.style.display = "none";
      passwordField.style.display = "block";
      hideVerificationMessages();
    } else {
      showErrorMessage("Please enter a valid email.", emailField);
    }
  });

  passwordButton.addEventListener("click", function () {
    const password = document.querySelector("#password").value.trim();
    if (password !== "") {
      showSuccessMessage();
    } else {
      showErrorMessage("Please enter a password.", passwordField);
    }
  });

  form.addEventListener("submit", function (validationEvent) {
    validationEvent.preventDefault();
  });

  function showSuccessMessage() {
    successMessage.innerText = "Form sent successfully!";
    successMessage.style.display = "block";
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 2000);
    form.reset();
    usernameField.style.display = "block";
    emailField.style.display = "none";
    passwordField.style.display = "none";
    hideVerificationMessages();
  }

  function showErrorMessage(message, field) {
    const verificationMessage = field.querySelector(".verification");
    verificationMessage.innerText = message;
    verificationMessage.style.color = "red";
    verificationMessage.style.display = "block";
  }

  function hideVerificationMessages() {
    verifications.forEach((verification) => {
      verification.style.display = "none";
    });
  }
});
