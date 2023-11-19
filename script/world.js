/* --------------------header------------------------ */

let searchbtn =document.querySelector("#search-btn");
let searchform =document.querySelector(".search-form");
let loginform = document.querySelector(".login-form") ;
let menubar = document.querySelector("#menu-bar") ;
let navbar = document.querySelector(".navbar") ;

function showbar(){
    searchbtn.classList.toggle("fa-times")
    searchform.classList.toggle("active")
}

function showform(){
    loginform.classList.add("active")
}

function timesform(){
    loginform.classList.remove("active")
}

function showmenu(){
    menubar.classList.toggle("fa-times")

    navbar.classList.toggle("active")
}


/* -------------------- /header------------------------ */

/* ---------------------home--------------------------- */

let videobtn = document.querySelectorAll(".video-btn")

videobtn.forEach(slidr => {
    slidr.addEventListener("click" , function(){
        document.querySelector(".controls .blue").classList.remove("blue")
        slidr.classList.add("blue")
        let src = slidr.getAttribute("data-src")
        document.querySelector("#videos").src=src
    })
});


/* ---------------------/home--------------------------- */

/* <!-- ------------------------review------------------------ --> */

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }

});
/* <!-- ------------------------/review------------------------ --> */
