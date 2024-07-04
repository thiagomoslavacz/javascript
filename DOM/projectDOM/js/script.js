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

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");

  form.addEventListener("submit", function (validationEvent) {
    validationEvent.preventDefault();

    if (validateForm()) {
      alert("Form sent successfully!");
      form.reset();
    } else {
      alert("Please fill in all fields correctly.");
    }
  });

  function validateForm() {
    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();

    if (username === "" && email === "") {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    return true;
  }
});
