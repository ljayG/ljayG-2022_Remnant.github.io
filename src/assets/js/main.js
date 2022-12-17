$(function () {
  mainInit();
});

function mainInit() {
  swiperMainVisual();
  swiperMainProg();
  swiperMainBtm();
}

var swiperMainVisual = new Swiper('.main-viswrap', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
});

var sw = 0;
$('.main-viswrap .btn_pause').bind('click', function (e) {
  e.preventDefault();
  if (sw == 0) {
    $(this).addClass('on');
    swiperMainVisual.autoplay.stop();
    sw = 1;
  } else {
    $(this).removeClass('on');
    swiperMainVisual.autoplay.start();
    sw = 0;
  }
});

var swiperMainProg = new Swiper('.main-programWrap', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination2',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  breakpoints: {
    1120: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

var swiperMainBtm = new Swiper('.main-btmsld', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 8,
  loop: true,
  breakpoints: {
    1120: {
      spaceBetween: 25,
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
      },
    },
  },
});
