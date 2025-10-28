const sunToggle = document.querySelector(".toggle-theme-icon-sun");
const moonToggle = document.querySelector(".toggle-theme-icon-moon");

sunToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

moonToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
function updateIcons() {
  if (document.body.classList.contains("dark-theme")) {
    sunToggle.style.display = "none";
    moonToggle.style.display = "block";
    moonToggle.style.position = "relative";
    moonToggle.style.left = "2px";
  } else {
    sunToggle.style.display = "block";
    moonToggle.style.display = "none";
  }
}
updateIcons();
sunToggle.addEventListener("click", updateIcons);
moonToggle.addEventListener("click", updateIcons);