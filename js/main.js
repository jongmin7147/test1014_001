$(document).ready(function () { //실행틀시작


  AOS.init();
$(window).on('load',function(){
  AOS.refresh();
});

// 메인슬라이드 

var bn = new Swiper(".bn", {

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

}); //실행틀 끝