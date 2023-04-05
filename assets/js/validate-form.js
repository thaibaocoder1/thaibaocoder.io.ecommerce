// Lấy phần tử form và các trường nhập liệu
const form = document.querySelector(".form");
const usernameInput = form.querySelector('input[name="txt"]');
const emailInput = form.querySelector('input[name="email"]');
const passwordInput = form.querySelector('input[name="pswd"]');

function getFirstFormField(input) {
  return input.parentElement.querySelector(".form-label");
}

function setInvalid(input) {
  input.classList.add("invalid");
  getFirstFormField(input).classList.add("invalid");
}

function setValid(input) {
  input.classList.remove("invalid");
  getFirstFormField(input).classList.remove("invalid");
}

function validateRequired(input) {
  if (input.value.trim() === "") {
    setInvalid(input);
    return false;
  }
  setValid(input);
  return true;
}

function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.value)) {
    setInvalid(input);
    return false;
  }
  setValid(input);
  return true;
}

function validatePassword(input) {
  if (input.value.length < 6) {
    setInvalid(input);
    return false;
  }
  setValid(input);
  return true;
}

form.addEventListener("submit", function (event) {
  let isValid = true;

  if (!validateRequired(usernameInput)) {
    isValid = false;
  }
  if (!validateRequired(emailInput) || !validateEmail(emailInput)) {
    isValid = false;
  }
  if (!validateRequired(passwordInput) || !validatePassword(passwordInput)) {
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault();
  }
});
