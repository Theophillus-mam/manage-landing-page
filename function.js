function checkEmail() {
 
  const emailInput = document.getElementById('emailInput');
   let show = "";
   show = "Please enter a valid email address";
  if (emailInput.checkValidity()) {
    console.log("Email is valid.");
  } else {
    console.log("Email is not valid.");
    document.getElementById("red").innerText = show;
    
  }
  
}
 

let menuBtn = document.querySelector('.container')
const navlinks = document.querySelector('.nav-menu')


function myFunction(x) {
  x.classList.toggle("change");
}
menuBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile-menu');
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};

 var slideIndex = 1;
    showDivs(slideIndex);
function plusDivs(n){
  showDivs(slideIndex += n);
}
function showDivs(n){
  var i;
  var x = document.getElementsByClassName("slid");
  if(n > x.length){slideIndex = 1}
  if(n < 1){slideIndex = x.length}
  for(i =0; i < x.length; i++){
    x[i].style.display ="none";
  }
  x[slideIndex-1].style.display = "block";
};
