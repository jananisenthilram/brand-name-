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
