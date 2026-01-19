const header = document.getElementById("main-header");
header.addEventListener("mouseenter", () => {
  header.textContent = "You're hovering over me!";
});

header.addEventListener("mouseleave", () => {
  header.textContent = "Welcome to my beta project!";
});

const button = document.getElementById("clickBtn");
button.addEventListener("click", () => {
    alert("Button was clicked!");
});