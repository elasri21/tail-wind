const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const nav = document.querySelector("nav");

openNav.addEventListener("click", function() {
    this.style.display = "none";
    closeNav.style.display = "block";
    nav.style.display = "block";
});
closeNav.addEventListener("click", function() {
    this.style.display = "none";
    openNav.style.display = "block";
    nav.style.display = "none";
});

const header = document.querySelector("header");
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY == 0) {
        header.style.backgroundColor = "transparent";
        goUp.style.display = "none";
    } else if (this.scrollY > 500) {
        header.style.backgroundColor = "#4a6cf733";
        goUp.style.display = "flex";
    }
});