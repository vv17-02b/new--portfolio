// Burger 
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn')
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })

  menu.addEventListener('click', e => {
    if (e.target.classList.contains('menu__body')) {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    }
  })

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    })
  })
}

const anchors = document.querySelectorAll('a[href*="#"');
anchors.forEach(anchors => {
  anchors.addEventListener('click', event => {
    event.preventDefault();
    const blockId = anchors.getAttribute('href').substring(1)
    document.getElementById(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
});
// Burger 

// Slick 
$(function () {
  $('.popup__link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.gallery__slider').slick({
    prevArrow: '<button class="slick-btn slick-prev" type="button"><img src="./img/svg/arrow-left.svg" alt="left"></button>',
    nextArrow: '<button class="slick-btn slick-next" type = "button" > <img src="./img/svg/arrow-right.svg" alt="reght"></button>'
  });
  $('.gallery__item-inner').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] 
    },
  });
  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  })
});