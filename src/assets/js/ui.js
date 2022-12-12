$(function () {
  init();
});

function init() {
  moMenuOpen();
  mobileGnb();
}

const WAPPER = $('#wrapper');

function moMenuOpen() {
  $('#btnMenuMo, #btnMenuMoClose').bind('click', function (e) {
    e.preventDefault();

    if (!WAPPER.hasClass('mo-menuOpen')) {
      WAPPER.addClass('mo-menuOpen');
    } else {
      WAPPER.removeClass('mo-menuOpen');
    }
  });
}

function mobileGnb() {
  $('.mo-nav .depth1 .depalpha a').bind('click', function (e) {
    e.preventDefault();
    let depStatus1 = $(this).closest('li');
    let depStatus2 = depStatus1.children('.depth2');

    if (!depStatus1.hasClass('active')) {
      $('.mo-nav .depth1 > li').removeClass('active').attr('aria-expanded', 'false');
      $('.mo-nav .depth1 .depth2').slideUp('fast');
      depStatus1.addClass('active').attr('aria-expanded', 'true');
      depStatus2.slideDown('fast');
    } else {
      depStatus1.removeClass('active').attr('aria-expanded', 'false');
      depStatus2.slideUp('fast');
    }
  });
}
