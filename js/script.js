const topBtn = document.getElementById("topBtn");
window.onscroll = function(){
if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}
};
topBtn.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};
const images = document.querySelectorAll(".work_gallery img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", function(){
        popup.style.display = "flex";
        popupImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function(){
    popup.style.display = "none";
});
let slides = document.querySelectorAll(".slide");
let texts = document.querySelectorAll(".slide_text");

let currentSlide = 0;

function showSlide(index){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

texts.forEach((text)=>{
text.classList.remove("active");
});

slides[index].classList.add("active");
texts[index].classList.add("active");

}

function nextSlide(){
currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

showSlide(currentSlide);
}

function prevSlide(){
currentSlide--;

if(currentSlide < 0){
currentSlide = slides.length - 1;
}

showSlide(currentSlide);
}
setInterval(nextSlide, 4000);

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace('+', '');

    const increment = target / 100;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}+`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target + '+';
    }
  };

  updateCounter();
});
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Run on page load
revealOnScroll();