// ===============================
// GARUDA AUTOMOBILE INTERACTIVE JS
// ===============================


// WEBSITE LOADED MESSAGE
window.addEventListener("load", () => {
console.log("GARUDA Automobile Website Loaded 🚗");
});


// ===============================
// NAVBAR CLICK ANIMATION
// ===============================

const navItems = document.querySelectorAll(".info1,.info2,.info3,.info4,.info5,.info6");

navItems.forEach(item => {

item.addEventListener("click", function(){

navItems.forEach(el => {
el.style.color = "aquamarine";
el.style.transform = "scale(1)";
});

this.style.color = "yellow";
this.style.transform = "scale(1.2)";

});

});


// ===============================
// NAVBAR HOVER GLOW EFFECT
// ===============================

navItems.forEach(item => {

item.addEventListener("mouseenter", () => {

item.style.textShadow = "0px 0px 10px cyan";
item.style.transition = "0.3s";

});

item.addEventListener("mouseleave", () => {

item.style.textShadow = "none";

});

});


// ===============================
// MAIN CAR IMAGE ZOOM EFFECT
// ===============================

const mainCar = document.querySelector(".car2");

mainCar.addEventListener("mouseenter", () => {

mainCar.style.transform = "scale(1.03)";
mainCar.style.transition = "0.5s";
mainCar.style.filter = "brightness(110%)";

});

mainCar.addEventListener("mouseleave", () => {

mainCar.style.transform = "scale(1)";
mainCar.style.filter = "brightness(100%)";

});


// ===============================
// BMW IMAGE TILT EFFECT
// ===============================

const bmw = document.querySelector(".car1");

bmw.addEventListener("mouseenter", () => {

bmw.style.transform = "rotate(4deg) scale(1.1)";
bmw.style.transition = "0.4s";

});

bmw.addEventListener("mouseleave", () => {

bmw.style.transform = "rotate(0deg) scale(1)";

});


// ===============================
// INTERIOR EXTERIOR FUTURE CARDS
// ===============================

const boxes = document.querySelectorAll(".box1,.box2,.box3");

boxes.forEach(box => {

box.addEventListener("mouseenter", () => {

box.style.transform = "scale(1.08)";
box.style.boxShadow = "0px 0px 25px cyan";
box.style.transition = "0.3s";

});

box.addEventListener("mouseleave", () => {

box.style.transform = "scale(1)";
box.style.boxShadow = "none";

});

});


// ===============================
// SHOWROOM MAP CLICK
// ===============================

const map = document.querySelector(".MAPS");

map.addEventListener("click", () => {

alert(
"🚗 GARUDA SHOWROOMS AVAILABLE IN\n\nDelhi\nMumbai\nPune\nBangalore\nHyderabad\nChennai"
);

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

window.addEventListener("scroll", () => {

boxes.forEach(box => {

let position = box.getBoundingClientRect().top;

let screenPosition = window.innerHeight - 100;

if(position < screenPosition){

box.style.opacity = "1";
box.style.transform = "translateY(0)";
box.style.transition = "0.8s";

}

});

});


// ===============================
// CAR IMAGE AUTO LIGHT EFFECT
// ===============================

setInterval(() => {

mainCar.style.filter = "brightness(120%)";

setTimeout(() => {
mainCar.style.filter = "brightness(100%)";
},500);

},4000);


// ===============================
// CURSOR GLOW EFFECT
// ===============================

document.addEventListener("mousemove", e => {

let glow = document.getElementById("cursor-glow");

if(!glow){

glow = document.createElement("div");
glow.id = "cursor-glow";

glow.style.position = "fixed";
glow.style.width = "120px";
glow.style.height = "120px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "radial-gradient(circle,rgba(0,255,255,0.3),transparent)";
glow.style.zIndex = "9999";

document.body.appendChild(glow);

}

glow.style.left = e.clientX - 60 + "px";
glow.style.top = e.clientY - 60 + "px";

});