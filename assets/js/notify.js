function handleCreateNotification(title, img) {
  const htmls = `
    <div class="noti">
    <img
      src="${img}"
      alt=""
      class="noti-img"
    />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <div class="noti-desc">
        <a href="./../../products-1.html" class="noti-link">Explore now!</a>
      </div>
    </div>
  </div>
    `;
  document.body.insertAdjacentHTML("afterbegin", htmls);
}
const titleList = [
  "Best seller product",
  "Amazing!! This is a high-quality product",
  "New product!",
  "High price? No problem!",
  "King of clothes!",
];
let titleTemp;
const imgList = [
  `./assets/img/product-1.jpg`,
  `./assets/img/img-product-17.avif`,
  `./assets/img/product-4.jpg`,
  `./assets/img/product-5.jpg`,
  `./assets/img/product-6.jpg`,
  `./assets/img/img-product-47.avif`,
  `./assets/img/img-product-46.webp`,
  `./assets/img/img-product-44.jpg`,
  `./assets/img/img-product-43.webp`,
];
let imgTemp;
const timer = setInterval(() => {
  const item = document.querySelector(".noti");
  if (item) {
    item.parentNode.removeChild(item);
  }
  const title = titleList[Math.floor(Math.random() * titleList.length)];
  const img = imgList[Math.floor(Math.random() * imgList.length)];
  if (titleTemp !== title && imgTemp !== img) {
    handleCreateNotification(title, img);
  }
  titleTemp = title;
  imgTemp = img;
}, 4000);
