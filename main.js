let searchbtn = document.querySelector("#searchbtn");
let searchform = document.querySelector(".search-form")
let loginform = document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let amenuBar = document.querySelector(".navbar")
let vidbtn = document.querySelectorAll(".video-btn")
function showbar() {
    searchbtn.classList.toggle("fa-times");
    searchform.classList.toggle("active");
} function showform() {
    loginform.classList.add("active")
}
function hideform() {
    loginform.classList.remove("active")
}
function showmenu() {
    menuBar.classList.toggle("fa-times")
    amenuBar.classList.toggle("active")

}
vidbtn.forEach(slide => {
    slide.addEventListener("click", function () {
        document.querySelector(".control .blur").classList.remove("blur");
        slide.classList.add("blur");
        let src = slide.getAttribute("data-src")
        document.querySelector("#video-slider").src = src
    })
})
var swiper = new Swiper(".review-slider", {
    spaceBetween :200,
    loop:true,
    autoplay:{
        delay:2500,
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