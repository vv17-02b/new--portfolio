$(function () {
  $('.header-slider').slick({
    dots: true,
    prevArrow: '<button class="btn-reset button-prev"><img src="./img/svg/prev.svg" alt="button"></button>',
    nextArrow: '<button class="btn-reset button-next"><img src="./img/svg/next.svg" alt="button"></button>',
    // vertical:true,
    fade: true,
    responsive: [{
      breakpoint: 371,
      settings: {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
    ]
  });
  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    prevArrow: '<button class="btn-reset product-prev"><img src="./img/product-prev.svg" alt="product"></button>',
    nextArrow: '<button class="btn-reset product-next"><img src="./img/product-next.svg" alt="product"></button>',
    responsive: [{
        breakpoint: 891,
        settings: {
          vertical: false,
          slidesToShow: 3,
          arrows: false,
          // centerMode:true,
          dots: true,
        },
        breakpoint: 461,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false,
    // focusOnSelect: true
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
});

// Бегущий text 
var wrapper = document.querySelector('.marquee-wrapper'),
  marquee = document.querySelector('.marquee'),
  wrapperWidth = wrapper.offsetWidth,
  marqueeWidth = marquee.scrollWidth;

document.querySelector('button').onclick = function () {
  clearInterval(interval)
}

function move() {
  var currentTX = getComputedStyle(marquee).transform.split(',');
  if (currentTX[4] === undefined) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }

  if (-currentTX >= marqueeWidth) {
    marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';

  } else {
    marquee.style.transform = 'translateX(' + currentTX + 'px)';
  }
}

var interval = setInterval(move, 40);
// Бегущий text 