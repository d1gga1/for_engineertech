const toggleButtons = document.querySelectorAll('.expand-button');
const hiddenDiv = document.querySelectorAll('.portfolio-hidden-text');
const textDiv = document.querySelectorAll('.portfolio-text');

toggleButtons.forEach((button, index)=> {
    button.addEventListener("click", function() {
        hiddenDiv[index].classList.toggle("show-div");
        button.classList.toggle("rotate");
        textDiv[index].classList.toggle("corners");
    });
});