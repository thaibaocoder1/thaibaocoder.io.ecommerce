const select = document.getElementById("select");
const products = document.querySelectorAll(".row .col-4");
let sortedProducts = [];
const productsArrs = Array.from(products);
productsArrs.forEach((product) => {
  sortedProducts.push(product);
});
let currentOption = select.value;
select.addEventListener("change", (e) => {
  currentOption = e.target.value;
  sortProducts(currentOption);
});
function sortProducts(option) {
  let productA, productB;
  switch (option) {
    case "default":
      sortedProducts.forEach((product) => {
        product.parentNode.appendChild(product);
      });
      break;
    case "by-price":
      sortedProducts = sortedProducts.flat().sort((a, b) => {
        productA = parseFloat(
          a.querySelector(".price").textContent.replace("$", "")
        );
        productB = parseFloat(
          b.querySelector(".price").textContent.replace("$", "")
        );
        return productA - productB;
      });
      sortedProducts.forEach((product) => {
        product.parentNode.appendChild(product);
      });
      break;
    case "by-price-low":
      sortedProducts = sortedProducts.flat().sort((a, b) => {
        productA = parseFloat(
          a.querySelector(".price").textContent.replace("$", "")
        );
        productB = parseFloat(
          b.querySelector(".price").textContent.replace("$", "")
        );
        return productA - productB;
      });
      sortedProducts.forEach((product) => {
        product.parentNode.appendChild(product);
      });
      sortedProducts.forEach((product) => {
        product.parentNode.appendChild(product);
      });
      break;
    case "by-rating":
      sortedProducts = sortedProducts.flat().sort((a, b) => {
        productA = parseFloat(a.getAttribute("data-rating"));
        productB = parseFloat(b.getAttribute("data-rating"));
        return productB - productA;
      });
      sortedProducts.forEach((product) => {
        product.parentNode.appendChild(product);
      });
      break;
    default:
      break;
  }
}
select.addEventListener("change", function () {
  sortProducts(this.value);
});
sortProducts(select.value);
