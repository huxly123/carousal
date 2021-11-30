let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item')
const totalslides = slides.length;

document.getElementById('carousel-button-next').addEventListener("click", () => {
moveToNextslide()
})

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", () => {
   moveToPrevslide()
  });

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
    slides[slidePosition].classList.add("carousel-item-visible");
  }

function moveToNextslide() {

    updateSlidePosition()
    if (slidePosition === totalslides - 1) {
          slidePosition=0
    } else {
        slidePosition++
      }
}
  

function moveToPrevslide() {
    updateSlidePosition()
     if (slidePosition === 0) {
       slidePosition = totalslides - 1;
     } else {
       slidePosition --;
     }
}

setInterval(() => {
   moveToNextslide()
},2000)