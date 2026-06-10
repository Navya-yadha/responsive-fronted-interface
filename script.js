const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", () => {
    alert("Welcome to Responsive Frontend Development!");
});