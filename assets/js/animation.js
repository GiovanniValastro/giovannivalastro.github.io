// Set navbar scrolling

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3 ) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});




// Actives animation after scrolling 


function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;
 
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");

    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



// Set slides


let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  pagination: false,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2
    },
    610: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4
    },
  } 
});



// Rotate the form card


const card = document.querySelector(".card-inner");
const form_img1 = document.querySelector(".form-img1");
const form_img2 = document.querySelector(".form-img2");

function rotate(form_img){
  form_img.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
  });
}

rotate(form_img1);
rotate(form_img2);













  

  