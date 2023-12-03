document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slides-container");
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
 
  function moveToNextSlide() {
     currentIndex = (currentIndex + 1) % slides.length;
     slider.style.transition = "transform 3s ease-in-out";
     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
 
  setInterval(moveToNextSlide, 8000);
 });

 const buttons = document.querySelectorAll("[data-carousel-button]")
 buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
 })