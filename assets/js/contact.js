const form = document.getElementById("contactForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const contactButton = document.getElementById("contactButton");

function validateFullName() {
  const fullNameValue = fullNameInput.value.trim();
  if (fullNameValue === "") {
    fullNameError.textContent = "Full Name is required";
    return false;
  } else {
    fullNameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    emailError.textContent = "Email is required";
    return false;
  } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
    emailError.textContent = "Invalid email format";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePhone() {
  const phoneValue = phoneInput.value.trim();
  if (phoneValue === "") {
    phoneError.textContent = "Phone is required";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

function validateForm() {
  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  return isFullNameValid && isEmailValid && isPhoneValid;
}

contactButton.addEventListener("click", () => {
  if (validateForm()) {
    alert("Form submitted successfully");
    // You can add your own logic here to submit the form to a server
  }
});
