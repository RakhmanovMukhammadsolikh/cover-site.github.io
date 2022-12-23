// let swiper = new Swiper('.swiper', {
//   // loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   slidesPerView: 2,
//   // grid: {
//   //   rows: 2,
//   // },
//   // spaceBetween: 20,
//   // breakpoints: {
//   //   // when window width is >= 320px
//   //   320: {
//   //     slidesPerView: 1,
//   //     // spaceBetween: 20
//   //   },
//   //   // when window width is >= 480px
//   //   // 480: {
//   //   //   slidesPerView: 3,
//   //   //   spaceBetween: 30
//   //   // },
//   //   // // when window width is >= 640px
//   //   800: {
//   //     slidesPerView: 4,
//   //     // spaceBetween: 40
//   //   }

//   // }
// });


let table = document.getElementById('section_items');

table.onclick = function (event) {
  let target = event.target;

  while (target != this) {
    if (target.className == 'section_button') {
      target.parentNode.parentNode.children[1].style.display = "flex"
      target.parentNode.parentNode.children[0].style.display = "none"
      return;
    } else if (target.className == 'section_clos') {
      target.parentNode.parentNode.children[1].style.display = "none"
      target.parentNode.parentNode.children[0].style.display = "block"
      return;
    }
    target = target.parentNode;
  }
}




// BURGER MENU

const burger = document.getElementById('burger')
const closed = document.getElementById("close")
const menu = document.getElementById("menu")


burger.addEventListener('click', (e) => {
  console.log('shj', menu);
  menu.classList.toggle('active');
  menu.style.display = 'block'
  burger.style.display = 'none'
  closed.style.display = 'block'

});

closed.addEventListener('click', (e) => {

  menu.style.display = 'none'
  burger.style.display = 'block'
  closed.style.display = 'none'
})


let section_items = document.querySelectorAll('.section_item')

let section_show_button = document.getElementById('section_show_button');
let section_hide_button = document.getElementById('section_hide_button');


section_show_button.addEventListener('click', () => {
  for (let index = 0; index < section_items.length; index++) {
    let element = section_items[index];
    element.classList.remove('active')
  }
  section_show_button.hidden = true
  section_hide_button.hidden = false
})

section_hide_button.addEventListener('click', () => {
  for (let index = 0; index < section_items.length; index++) {
    let element = section_items[index];
    if (index > 5) {
      element.classList.add('active')
    }
  }
  section_show_button.hidden = false
  section_hide_button.hidden = true
});

var TrandingSlider = new Swiper('.tranding-slider', {
  grabCursor: true,
  loop: true,
  slidesPerView:1,
  breakpoints: {
      1000:{
          slidesPerView: 3
      },
      700:{
          slidesPerView:2
      },
  },
  spaceBetween:25,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


const  submit = document.getElementById('submit') 
const thank = document.querySelector(".thank")

submit.addEventListener("click", (e) => {
  thank.style.display = 'block'
})


const img = document.querySelector(".cleaning_img")
const button = document.querySelector(".cleaning_button")
const video = document.querySelector(".cleaning_mp4")


button.addEventListener("click", () => {
    if(video.paused){
        video.play();
        img.style.opacity = '0';
        img.style.trancition = '1s';
        button.style.trancition = '1s';
        button.style.opacity  = '0';
        setTimeout(() => {
          img.style.zIndex = '-1';
          button.style.zIndex  = '-1';
        }, 400)
    }else{
      img.style.opocity = '1';
      button.style.opocity  = '1'
      img.style.zIndex = '1';
      button.style.zIndex  = '1';
      img.style.trancition = '1s';
      button.style.trancition = '1s';
    }
})

video.addEventListener("ended", () => {
  img.style.zIndex = '1';
  button.style.zIndex  = '1';
  setTimeout(() => {
    img.style.opacity = '1';
    button.style.opacity  = '1'
    img.style.trancition = '1s';
    button.style.trancition = '1s';
  }, 500)
})


// const sr = ScrollReveal({
//   distance: '50px',
//   duration: 1500,
//   easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
// });

// sr.reveal('.header_items', {origin: 'top'});
// sr.reveal('.header_title', {origin: 'top'});
// sr.reveal('.header_subtitle', {origin: 'left'});
// sr.reveal('.header_information', {origin: 'left'});
// sr.reveal('.header_submit', {origin: 'right'});


// document.body.scrollBy.top = '0'
