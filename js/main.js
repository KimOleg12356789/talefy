const swiperLogos = new Swiper(".swiper-logos", {
  slidesPerView: "auto",
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next.logos",
    prevEl: ".swiper-button-prev.logos",
  },

  breakpoints: {
    769: {
      slidesPerView: "auto",
      spaceBetween: 50,
    },
    
  }
});
const swiperCompanies = new Swiper(".swiper-companies", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    769: {
    
      slidesPerView: 3,
      spaceBetween: 22,
    },
    
  }
});
const swiperFeedback = new Swiper(".swiper-feedback", {
  slidesPerView: 1.1,
  spaceBetween: 14,

  navigation: {
    nextEl: ".swiper-button-next.feedback",
    prevEl: ".swiper-button-prev.feedback",
  },

  pagination: {
    el: ".swiper-pagination.feedback",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    769: {
    
      slidesPerView: 3,
      spaceBetween: 40,
    },
    
  }
});
const swiperFeedback2 = new Swiper(".swiper-feedback2", {
  slidesPerView: 1.1,
  spaceBetween: 14,

  navigation: {
    nextEl: ".swiper-button-next.feedback2",
    prevEl: ".swiper-button-prev.feedback2",
  },

  pagination: {
    el: ".swiper-pagination.feedback2",
    clickable: true,
  },
  breakpoints: {
    769: {
    
      slidesPerView: 3,
      spaceBetween: 40,
    },
    
  }
});



function blockScroll(){
  scrollY = window.pageYOffset;
  document.body.style.top = `-${window.pageYOffset}px`;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
}
function unblockScroll(){
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
}

const mediaMatch = window.matchMedia("(max-width: 768px)");

const popup = document.getElementById('overlay');
const popupClose = document.querySelector('.popup__close');
const popupCloseBtn = document.querySelector('.popup__form-btn');

const popupBtnsArr = document.querySelectorAll('.popup__btn');

const shadow = document.getElementById('shadow')

shadow.addEventListener('click', ()=>{
  shadow.classList.remove('active')
  popup.classList.remove('active');
  unblockScroll();
})

const requestBtn = document.querySelectorAll('.color__form button')

for(let i of requestBtn) i.addEventListener('click', ()=>{
  shadow.classList.add('active')
  blockScroll()
})


for(let i of popupBtnsArr){
  i.addEventListener('click', ()=>{
    popup.classList.add('active');
    shadow.classList.add('active')
    blockScroll();
  })
}

popupClose.addEventListener('click', ()=>{
  popup.classList.remove('active');
  shadow.classList.remove('active')
  unblockScroll();
})
popupCloseBtn.addEventListener('click', ()=>{
  popup.classList.remove('active');
  shadow.classList.remove('active')
  unblockScroll();
})



const burgerOpen = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__menu');

const burgerLinks = document.querySelectorAll('.header__menu.mobile .header__link')

burgerOpen.addEventListener('click', ()=>{
  if(burgerMenu.classList.contains('active')){
    burgerMenu.classList.remove('active');
   
    unblockScroll();
  }
  else{
    burgerMenu.classList.add('active');
    blockScroll();
  }
 
})

if(mediaMatch.matches){
  for(let i of burgerLinks) i.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    unblockScroll();
  })
  document.querySelector('.features__btn-open.mobile').addEventListener('click', ()=>{
    document.querySelector('.features__list').classList.add('active')
    document.querySelector('.features__btn-open.mobile').classList.add('none')
  })
}

document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: (mediaMatch.matches) ? elementPosition - 40 : elementPosition,
      behavior: "smooth",
    });
  });
});



// window.addEventListener('scroll', function () {
//   if(document.querySelector('.video img') !== null) document.querySelector('.video .container').innerHTML = '<iframe src="https://www.youtube.com/embed/fnTA_AGkdF0?autoplay=1&mute=1" width="560" height="315" title="A YouTube video" frameborder="0" allowfullscreen></iframe>  '
// });


const acc = document?.getElementsByClassName("accordion");

acc[0].classList.add("active");
if (window.matchMedia("(max-width: 768px)").matches) {
  acc[0].nextElementSibling.style.maxHeight =
    acc[0].nextElementSibling.scrollHeight + 20 + "px";
} else {
  acc[0].nextElementSibling.style.maxHeight =
    acc[0].nextElementSibling.scrollHeight + "px";
}

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

for (let i of document.querySelectorAll(".phone-mask")) {
  IMask(i, {
    mask: "+{7}(000)000-00-00",
  });
}

const mainVideos = document.querySelectorAll('.video video');
const mainVideoIcon = document.querySelector('.video .swiper-feedback__icon');

for(let i=0; i < mainVideos.length; i++){

  mainVideos[i].addEventListener('playing', ()=>{
      mainVideoIcon.classList.add('unvisible')
  })
  mainVideos[i].addEventListener('pause', ()=>{
      mainVideoIcon.classList.remove('unvisible')
  })
  mainVideos[i].addEventListener('ended', ()=>{
      mainVideoIcon.classList.remove('unvisible')
  })
}

const swiperVideos = document.querySelectorAll('.swiper-feedback__video');
const swiperVideosIcons = document.querySelectorAll('.feedback2 .swiper-feedback__icon');

for(let i=0; i < swiperVideos.length; i++){
  swiperVideos[i].addEventListener('playing', ()=>{
    swiperVideosIcons[i].classList.add('unvisible')
  })
  swiperVideos[i].addEventListener('pause', ()=>{
    swiperVideosIcons[i].classList.remove('unvisible')
  })
  swiperVideos[i].addEventListener('ended', ()=>{
    swiperVideosIcons[i].classList.remove('unvisible')
  })
}



document.querySelectorAll('.welcome__btn-link').forEach((link)=>{
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    console.log(elementPosition)

    window.scrollBy({
      top: elementPosition - 60,
      behavior: "smooth",
    });
  });
})

const featuresList = document.querySelector('.features__list')
const featuresItems = document.querySelectorAll('.features__item');

if(mediaMatch.matches){
 
    let heightOfItems = 0;
    for(let i = 0; i < 4; i++){
      heightOfItems += featuresItems[i].offsetHeight;
    }
    heightOfItems += 65;
    featuresList.style.maxHeight = `${heightOfItems}px`;

}
