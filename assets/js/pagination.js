let currentPage = 1;
let spans = document.querySelectorAll(".page-btn span");
spans.forEach((span) => {
  span.addEventListener("click", () => {
    let page = +span.innerHTML;
    currentPage = page;
    spans.forEach((s) => s.classList.remove("active"));
    span.classList.add("active");
    window.location.href = `/products-${page}.html`;
  });
});
