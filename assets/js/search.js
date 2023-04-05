const searchBlock = document.querySelector(".search");
const inputBlock = document.querySelector(".input");
const btnBlock = document.querySelector(".btn-search");
const inputSearch = document.getElementById("search-input");
btnBlock.addEventListener("click", () => {
  searchBlock.classList.toggle("active");
  inputBlock.focus();
});
inputSearch.addEventListener("keyup", () => {
  const filter = inputSearch.value.toUpperCase();
  const nameList = document.querySelectorAll(".name");
  if (filter === "") {
    [...nameList].forEach((nameItem) => {
      nameItem.innerHTML = nameItem.textContent;
    });
    return;
  }
  [...nameList].forEach((nameItem) => {
    let textValue = nameItem.textContent;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      textValue = textValue.replace(
        new RegExp(filter, "gi"),
        `<span class="highlight">$&</span>`
      );
      nameItem.innerHTML = textValue;
    } else {
      nameItem.innerHTML = textValue;
    }
  });
});
