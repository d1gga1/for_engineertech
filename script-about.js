const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const toggleDropdown = document.getElementById("hamburger-content");
const buttonDropdown = document.getElementById("hamburger-btn");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});


function closeDropdown() {
  toggleDropdown.classList.remove("show-hb");
}

// Event listener for the hamburger button click
buttonDropdown.addEventListener("click", function() {
  toggleDropdown.classList.toggle("show-hb");
});

// Event listener for scrolling anywhere on the page
window.addEventListener("scroll", function() {
  closeDropdown();
});

// Event listener for clicking outside of the dropdown
document.addEventListener("click", function(event) {
  const target = event.target;

  // Check if the click is outside of the dropdown and the hamburger button
  if (!toggleDropdown.contains(target) && target !== buttonDropdown) {
      closeDropdown();
  }
});
