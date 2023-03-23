var icon = document.getElementById("moon-icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.setAttribute("class", "fa-solid fa-sun navbar__mode--icon");
  } else {
    icon.setAttribute("class", "fa-solid fa-moon navbar__mode--icon");
  }
};
