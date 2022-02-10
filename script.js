let hamburger = document.querySelector(".hamburger img");

hamburger.addEventListener("click", () => {
    hamburger.parentNode.classList.toggle("show-nav")
});