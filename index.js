


try {

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");  
const prevBtnFifth = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const bullet = document.querySelectorAll(".step .bullet");
const dot = document.querySelectorAll(".step .dot");
let current = 1;


//load the first active  when the webpage
window.onload = function(){
  dot[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  slidePage.style.marginLeft = "6%";
}

//next button functions with animation

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  dot[current - 0].classList.add("active");
  bullet[current - 0].classList.add("active");
  progressText[current - 0].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  dot[current - 0].classList.add("active");
  bullet[current - 0].classList.add("active");
  progressText[current - 0].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  dot[current - 0].classList.add("active");
  bullet[current - 0].classList.add("active");
  progressText[current - 0].classList.add("active");
  current += 1;
});
nextBtnFourth.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-100%";
    dot[current - 0].classList.add("active");
    bullet[current - 0].classList.add("active");
    progressText[current - 0].classList.add("active");
    current += 1;
  });
submitBtn.addEventListener("click", function(){
  dot[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});





//previous button functions

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "6%";
  dot[current - 1].classList.remove("active");
  bullet[current - 1].classList.remove("active");
  progressText[current - 1].classList.remove("active");
  current -= 1;
});

prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  dot[current - 1].classList.remove("active");
  bullet[current - 1].classList.remove("active");
  progressText[current - 1].classList.remove("active");
  current -= 1;
});

prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  dot[current - 1].classList.remove("active");
  bullet[current - 1].classList.remove("active");
  progressText[current - 1].classList.remove("active");
  current -= 1;
});

prevBtnFifth.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    dot[current - 1].classList.remove("active");
    bullet[current - 1].classList.remove("active");
    progressText[current - 1].classList.remove("active");
    current -= 1;
  });




  


  function loadAPICountry() {

    

    document.addEventListener('DOMContentLoaded', ()=>{
    
        const countryCodeDropDown = document.querySelector("#c_tel_country_code");
    
        fetch('https://restcountries.com/v2/all').then(res => {
        return res.json();
        }).then(data => {
        let output = "";
        data.forEach(country => {
            console.log(country.name);
            output +=`<option value="${country.name}">+${country.callingCodes} ${country.name}</option>`;
        })
        countryCodeDropDown.innerHTML = output;
        }).catch(err => {
        console.log(err);
        })
    
    });

}

loadAPICountry();




  
}




catch(err) {
    window.innerHTML = ` ${err.message}`
}

