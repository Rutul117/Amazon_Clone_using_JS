import { todayDeal } from "./today-deal.js"

let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")


let startSlider = 0
let endSlider = (imgItem.length-1) *100

slideBtnLeft.addEventListener("click",handelLeftBtn)

function handelLeftBtn(){
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click",handelRightBtn)

function handelRightBtn(){
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    
    })
}

// Render automatic sliding 

function renderSlideAuto(){
    if(startSlider >= -endSlider+100){
        handelRightBtn()
    }
    else{
        startSlider = 0
    }
}
setInterval(renderSlideAuto, 2000);


// Sidebar navigation open button 

const siderbarNavigationEl = document.getElementById("sidebar-container-navigation")
const sidebarOpenNavigationEl = document.getElementById("open-nav-slider")

sidebarOpenNavigationEl.addEventListener("click", ()=>{
    siderbarNavigationEl.classList.toggle("sidebar-show")
})


// Sidebar navifation Cross button
const sidebarCloseNavigationEl = document.getElementById("sidebar-nav-close")
sidebarCloseNavigationEl.addEventListener("click",()=>{
    siderbarNavigationEl.classList.toggle("sidebar-show")

})


// Today deals
console.log(todayDeal)
let todayDealProductListEl = document.querySelector(".today-deals-product-list")
console.log(todayDealProductListEl)

let todayDealProductHTML=""

let todayDeallength  = todayDeal.length
for(let i=0 ; i<todayDeallength;i++){
    todayDealProductHTML+=`
    <div class="today-deals-product-item">
        <img src=${todayDeal[i].img}>
        <div class="discount-container">
            <a href="#"> Up to ${todayDeal[i].discount}% off</a>
            <a href="#">${todayDeal[i].DealOfDay} </a>
        </div>
        <p>${todayDeal[i].Description}</p>
    </div>
   `
 }
todayDealProductListEl.innerHTML = todayDealProductHTML
console.log(todayDealProductHTML)


let todaysDealsBtnLeftEl = document.getElementById("todays-deals-btn-left")
console.log(todaysDealsBtnLeftEl)

let todayDealProductItemEl = document.querySelectorAll(".today-deals-product-item")

let startProduct = 0;
todaysDealsBtnLeftEl.addEventListener("click",()=>{
    // alert("left")
    if(startProduct < 0){
        startProduct += 500
    }
    if(startProduct > -2000)
    todayDealProductItemEl.forEach(el =>{
        el.style.transform = `translateX(${startProduct}%)`
    })
})

let todaysDealsBtnRightEl = document.getElementById("todays-deals-btn-right")
console.log(todaysDealsBtnRightEl)

todaysDealsBtnRightEl.addEventListener("click",()=>{
    // alert("right")
    if(startProduct > -1500){
        startProduct -= 500
    }
    todayDealProductItemEl.forEach(el =>{
        el.style.transform = `translateX(${startProduct}%)`
    })
})


// Make header fixed on scroll down
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > headerHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});
