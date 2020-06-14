var open = document.querySelector('.pages-navigation__btn');
var btn = document.querySelector('.pages-navigation__btn-brg');
var menu = document.querySelector('.pages');
open.addEventListener('click', function(){
  btn.classList.toggle('pages-navigation__btn-brg-active');
  menu.classList.toggle('pages-active');
});

window.addEventListener('DOMContentLoaded', function() {
  if (document.documentElement.scrollTop <= 60) {
    open.style.display = 'none';
  } else {
    open.style.display = 'flex';
  }
});

document.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop <= 60) {
    open.style.display = 'none';
    if (btn.classList.contains('pages-navigation__btn-brg-active') ||
      menu.classList.contains('pages-active')) {
        btn.classList.remove('pages-navigation__btn-brg-active');
        menu.classList.remove('pages-active');
      }
  } else {
    open.style.display = 'flex';
  }
});

$(document).ready(function(){
    $('.main-header-slider').slick({
        prevArrow: $(".main-header-block__btn-left"),
        nextArrow: $(".main-header-block__btn-right"),
        autoplay: true,
    });

    $('.learn-center-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".main-content-buttons__btn-left"),
        nextArrow: $(".main-content-buttons__btn-right"),
        autoplay: true,
    });

    $('.main-content-cards-block-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $(""),
        nextArrow: $(".main-content-cards-block__btn-right"),
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.main-articles-body-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        dots: true,
        arrows: false,
        appendDots: $('.main-articles > .container'),
        dotsClass: 'main-articles-bullets',
        responsive: [
            {
              breakpoint: 1245,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});