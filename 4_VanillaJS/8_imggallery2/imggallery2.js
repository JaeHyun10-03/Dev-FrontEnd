let slides = document.querySelectorAll("#container > img");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let current = 0;

showSlide(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[n].classList.add("active");
}

function prevSlide() {
  if (slides.length > current && current > 0) {
    current -= 1;
  } else {
    current = slides.length - 1;
  }
  console.log(current);
  showSlide(current);
}

function nextSlide() {
  if (current < slides.length-1) {
    current += 1;
  } else {
    current = 0;
  }
  console.log(current);
  showSlide(current);
}
