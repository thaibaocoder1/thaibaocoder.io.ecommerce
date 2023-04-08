// Get nodes from html
var inputUsername = document.getElementById("username");
var inputEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");
var inputConfirmPassword = document.getElementById("re-password");
var formBlock = document.querySelector("form");
// Functions
function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}
function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}
function checkIsInvalid(inputList) {
  let isInvalid = false;
  [...inputList].forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      showError(input, "Khong duoc de trong");
      return true;
    } else {
      showSuccess(input);
    }
  });
  return isInvalid;
}
function checkInvalidEmail(input) {
  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  input.value = input.value.trim();
  let isEmail = !regexEmail.test(input.value);
  if (!isEmail) {
    showSuccess(input);
  } else {
    showError(input, "Email is invalid");
  }
  return isEmail;
}
function checkLengthInput(input, min, max) {
  input.value = input.value.trim();
  let checkLength = input.value.length;
  if (checkLength < min) {
    showError(input, `Phai co it nhat tu ${min} ki tu`);
    return true;
  }
  if (checkLength > max) {
    showError(input, `Khong duoc vuot qua ${max} ki tu`);
    return true;
  }
  return false;
}
function checkMatchPassword(password, cfPassword) {
  if (password.value !== cfPassword.value) {
    showError(cfPassword, "Password khong trung khop");
    return true;
  }
  return false;
}
formBlock.addEventListener("submit", (e) => {
  e.preventDefault();
  let isInvalidInputList = checkIsInvalid([
    inputUsername,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
  ]);
  let isCheckEmail = checkInvalidEmail(inputEmail);
  let isCheckLengthUsername = checkLengthInput(inputUsername, 5, 10);
  let isCheckLengthPassword = checkLengthInput(inputPassword, 5, 15);
  let isCheckMatches = checkMatchPassword(inputPassword, inputConfirmPassword);
  if (
    isInvalidInputList ||
    isCheckEmail ||
    isCheckLengthUsername ||
    isCheckLengthPassword ||
    isCheckMatches
  ) {
    alert("Error login!");
  } else {
    window.location.href = `../../index.html`;
  }
});
