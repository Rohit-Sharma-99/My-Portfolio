let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});


let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

document.addEventListener("DOMContentLoaded", function() {
    const serviceBoxes = document.querySelectorAll('.service-box');

    serviceBoxes.forEach(box => {
        const paragraph = box.querySelector('p');
        const readMoreButton = box.querySelector('.btn');

        readMoreButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag
            paragraph.classList.toggle('expanded');
            if (paragraph.classList.contains('expanded')) {
                readMoreButton.textContent = 'Read less';
            } else {
                readMoreButton.textContent = 'Read more';
            }
        });
    });
});


// .....................Codes of Circle Skills..........................//

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }

})

//  mix it up portfolio
var mixer = mixitup('.portfolio-gallery');

// Active Menu ////////////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


// sticky navbar ////////////////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// toogle icon navbar ////////////////////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// parallax ////////////////////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});



const srcollScale = document.querySelectorAll(".scroll-scale");
srcollScale.forEach((e1)=>observer.observe(e1));

const srcollBottom = document.querySelectorAll(".scroll-bottom");
srcollBottom.forEach((e1)=>observer.observe(e1));

const srcollTop = document.querySelectorAll(".scroll-top");
srcollTop.forEach((e1)=>observer.observe(e1));



document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay (e.g., 3 seconds i.e 3000milliseconds) - Adjust as needed
    setTimeout(function () {
        // Remove the "preloader" element
        var preloader = document.querySelector(".preloader");
        preloader.parentNode.removeChild(preloader);

        // Add the "loaded" class to the body
        document.body.classList.add("loaded");
    }, 2000); // 3000 milliseconds (2 seconds)
});



    // Get the user's IP address using a third-party service
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            // Set the value of the hidden input field to the user's IP address
            document.getElementById('ip_address').value = data.ip;
        });

    var userAgent = navigator.userAgent;
    document.getElementById('user_agent').value = userAgent;

    // Get screen width and height
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
console.log("Screen Resolution: " + screenWidth + "x" + screenHeight);

// Get referrer URL
var referrerUrl = document.referrer;
console.log("Referrer URL: " + referrerUrl);

// Check if geolocation is supported
if ("geolocation" in navigator) {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
    });
} else {
    console.log("Geolocation is not supported.");
}

var platform = navigator.platform;
console.log("Platform: " + platform);




//  all the written codes under are of switching day/night mode in the website here
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('day-mode');   
};

//  here end code
      



//Optimizing for smoother experience codes start here 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const scrollToTopButton = document.getElementById('scrollToTopButton');

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img.lazy');

    const lazyLoad = function() {
        lazyImages.forEach(image => {
            if (image.offsetTop < window.innerHeight + window.pageYOffset) {
                image.src = image.dataset.src;
                image.classList.remove('lazy');
            }
        });
    };

    window.addEventListener('scroll', lazyLoad);
});



/*............JS CODE IS COMPLETELY READY FOR PROVIDING FUNCTIONALITY...............*/
