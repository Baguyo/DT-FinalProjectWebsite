var windowSize = window.innerWidth;
var navbarNotSizing = document.querySelector(".navbar");
    var windowNot = window.innerWidth;
    console.log(windowNot);
    if (windowNot <= 768) {
        navbarNotSizing.classList.remove("fixed-top")
    }
    else {
        navbarNotSizing.classList.add("fixed-top")
    }



window.addEventListener("resize", function (){
    var navbar = document.querySelector(".navbar");
    var windowSize = window.innerWidth;
    console.log(windowSize);
    if (windowSize <= 768) {
        navbar.classList.remove("fixed-top")
    }
    else {
        navbar.classList.add("fixed-top")
    }
}) 

const laptopContent = document.querySelector('#home-info');
var text = "Learn The Front End Web Development with Emerson S. Baguyo";
var i = 0;

function typing(){
    if(i < text.length){
        laptopContent.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 30);
    }
}
typing();

const webSign = document.querySelector('.web-sign');
var signIndex = 0;
    var sign = "< / >";
function webSignShow(){
    if(signIndex < sign.length ){
        webSign.innerHTML += sign[signIndex];
        signIndex++;
        setTimeout(webSignShow, 400);
    }
}
webSignShow();
// setInterval(function(){
//     var sign = "< / >";
//     webSign.innerHTML = sign;
// }, 2000)

const learningImages = document.querySelectorAll('.learning-content img');
const navbar = document.querySelector('.navbar');
const courseBlock = document.querySelectorAll('.course-block');
let courseBlockHeight = 1050;
var count = 0;
window.addEventListener('scroll', function(){
let windowScroll = window.scrollY;


if(windowScroll >= 150){
    console.log("need to apply animation in when scrolling")   
    for(var i = 0; i<learningImages.length; i++){
        learningImages[i].classList.add("learning-animation");
    }
}
if(windowScroll <= 149){
    console.log("need to apply animation in when scrolling")   
    for(var i = 0; i<learningImages.length; i++){
        learningImages[i].classList.remove("learning-animation");
    }
}
//COURSE INFO EFFECT
if(windowScroll >= courseBlockHeight){
    console.log("need to apply animation in when scrolling")
    courseBlock[count].classList.add("learning-animation");
    courseBlockHeight += 400;
    count++;
    //NAVBAR EFFECT
}
// if(windowScroll !== courseBlockHeight){
//     console.log("need to apply animation in when scrolling");
//     courseBlock[count].classList.remove("learning-animation");
//     courseBlockHeight  = courseBlockHeight - 500;
    
// }

if(windowScroll >= 60){
    navbar.classList.add("navigation-background");
}
else if(windowScroll <=59){
    navbar.classList.remove("navigation-background");
    typing();
    
}
})

