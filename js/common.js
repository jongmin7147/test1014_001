$(document).ready(function(){//실행틀시작

  // 데스크탑 depth2 
  $(".depth2, .depth2-bg").hide();

  $(".gnb > li").mouseenter(function () {
    $(".depth2-bg").stop().fadeIn();
    $(this).children(".depth2").stop().fadeIn();
  });

  $(".gnb > li").mouseleave(function () {
    $(".depth2-bg").stop().fadeOut();
    $(this).children(".depth2").stop().fadeOut();
  });


  // 모바일 depth2

  $(".dim").hide();
    $(".ham").click(function () {
        $(".dim").fadeIn();
        $(".mgnb-wrap").animate({
            "right": "0"
        });
    });

    $(".mgnb-close").click(function () {
        $(".dim").fadeOut();
        $(".mgnb-wrap").animate({
            "right": "-100%"
        });
        $(".mdepth2").hide();
    });
    
    $(".mdepth2").hide();

    $(".mgnb > li").click(function () {
        $(this).children(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });
  

}); //실행틀 끝