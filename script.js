document.addEventListener("DOMContentLoaded", () =>{
const prevBtn = document.querySelector(".icon.left");
const nextBtn = document.querySelector(".icon.right");
const Carousel = document.querySelector(".carousel-items");
const scrollAmount = 300;
prevBtn.addEventListener("click" , function () {
 Carousel.scrollBy({
    left: -scrollAmount,
    behavior : "smooth",
 });
});

nextBtn.addEventListener("click" , function  () {
    Carousel.scrollBy({
        left: scrollAmount,
        behavior : "smooth",
    });
 });
});
