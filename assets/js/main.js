// Cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");
cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});
closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
// Functions
function ready() {
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add item to cart
  var addCart = document.getElementsByClassName("box-cart--add");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
function buyButtonClicked() {
  alert("Your order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}
function removeCartItem(e) {
  var buttonClicked = e.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}
function quantityChanged(e) {
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}
function addCartClicked(event) {
  var buttonCta = event.target;
  var shopProducts = buttonCta.parentElement;
  var title = shopProducts.getElementsByClassName("name")[0].textContent;
  var price = shopProducts.getElementsByClassName("price")[0].textContent;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updateTotal();
}
function addProductToCart(title, price, productImg) {
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemNames.length; ++i) {
    if (cartItemNames[i].textContent === title) {
      var cartBox = cartItemNames[i].parentElement.parentElement;
      var quantityElemnt = cartBox.getElementsByClassName("cart-quantity")[0];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var currentQuantity = parseFloat(quantityElemnt.value);
      var newQuantity = currentQuantity + 1;
      quantityElemnt.value = newQuantity;
      var currentPrice = parseFloat(
        priceElement.getAttribute("data-price").replace("$", "")
      );
      console.log(typeof currentPrice);
      var newPrice = currentPrice * newQuantity;
      priceElement.textContent = `$ ${newPrice.toFixed(2)}`;
      updateTotal();
      return;
    }
  }
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartBoxContent = `
                          <img src="${productImg}" alt="" class="cart-img">
                              <div class="detail-box">
                                  <div class="cart-product-title">${title}</div>
                                  <div class="cart-price" data-price="${price}">${price}</div>
                                    <div>
                                    <input type="number" name="" id="" class="cart-quantity" value="1">
                                    <select name="" id="">
                                      <option value="">Select Size</option>
                                      <option value="">XXL</option>
                                      <option value="">XL</option>
                                      <option value="">Large</option>
                                      <option value="">Medium</option>
                                      <option value="">Small</option>
                                  </select>
                                  </div>
                              </div>
                              <i class="fa-solid fa-trash cart-remove"></i>
                              `;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
  updateTotal();
}
function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElemnt = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = parseFloat(quantityElemnt.value);
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-prices")[0].innerText = "$" + total;
}
