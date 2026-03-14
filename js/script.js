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
const rtlBtn = document.getElementById("rtlToggle");

rtlBtn.addEventListener("click", function(){

if(document.documentElement.dir === "rtl"){
document.documentElement.dir = "ltr";
}else{
document.documentElement.dir = "rtl";
}

});