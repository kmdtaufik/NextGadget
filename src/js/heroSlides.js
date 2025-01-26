let slideIndex = 0;
toggleSlides(slideIndex)
function plusSlides(n){
slideIndex += n;
toggleSlides(slideIndex);
}
function toggleSlides(n) {
    let i;
    let slides = document.getElementsByClassName("heroSlides");
    if(n>slides.length-1) {slideIndex=0}
    if(n<0){slideIndex=slides.length-1}
    for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
    }
    slides[slideIndex].classList.remove("hidden");
}
document.getElementById("prevButton").addEventListener("click", function(){
    plusSlides(-1);
    console.log("prev clicked");
});

document.getElementById("nextButton").addEventListener("click", function(){
    plusSlides(1);
    console.log("next clicked");
});
