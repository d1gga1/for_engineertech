const toggleDropdown = document.getElementById("hamburger-content");
const buttonDropdown = document.getElementById("hamburger-btn");


buttonDropdown.addEventListener("click", function(){
	toggleDropdown.classList.toggle("show-hb");
})