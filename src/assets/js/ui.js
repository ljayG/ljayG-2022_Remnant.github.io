$(function () {
  init();
});

function init() {
  moMenuOpen();
  mobileGnb();
  gnbMenu();
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

// GNB Fixed
var TopMenu, TopMenuPosition;
TopMenu = document.getElementById('wrapper');
TopMenuPosition = TopMenu.offsetTop;
function submenu_bar_fixed() {
  if (window.pageYOffset > TopMenuPosition) {
    TopMenu.classList.add('fx');
  } else {
    TopMenu.classList.remove('fx');
  }
}
submenu_bar_fixed();
document.addEventListener('scroll', submenu_bar_fixed);

function gnbMenu() {
  $(document).on('mouseover focus', '#gnb .nav-pcwrap .depth1', function () {
    $(this).closest('.depth1').addClass('over');
    $(this).closest('li').addClass('over').siblings('li').removeClass('over');
    WAPPER.addClass('gnbopen');
    let smHt = $('#gnb .nav-pcwrap').outerHeight() + 50;
    $('#gnb').css({ height: smHt });
  });

  $(document).on('mouseleave', '#header', function () {
    WAPPER.removeClass('gnbopen');
    $('.header .gnb .menu>li').removeClass('over');
    $(this).closest('.depth1').removeClass('over');
    $('#gnb').css('height', '');
  });

  $('#gnb #gnbClose').bind('click', function () {
    WAPPER.removeClass('gnbopen');
    $('.header .gnb .menu>li').removeClass('over');
    $(this).closest('.depth1').removeClass('over');
    $('#gnb').css('height', '');
  });

  $('.gnb .menu .active').each(function () {
    $(this).find('>.bt').attr('title', '선택됨');
  });

  // 접근성 포커스 역방향 2022-08-12
  $(document).on('focus', '.header .gnb .mtog', function () {
    WAPPER.removeClass('gnbopen');
    $('.header .gnb .menu>li').removeClass('over');
    $('.header .gnb .menu').removeClass('over');
  });
  // 접근성 focusout 2022-08-23
  $(document).on('focus', '.header .user', function () {
    WAPPER.removeClass('gnbopen');
    $('.header .gnb .menu>li').removeClass('over');
    $('.header .gnb .menu').removeClass('over');
  });
}
