$(document).ready(function(){
  "use strict";
  var pContainerHeight = $('.bird-box').height();

  $(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    if (wScroll <= pContainerHeight) {

      $('.logo').css({
        'transform': 'translate(0px, ' + wScroll / 6 + '%)'
      });

      $('.back-bird').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
      });

      $('.fore-bird').css({
        'transform': 'translate(0px, -' + wScroll / 20 + '%)'
      });

    }
  });
  //------ NAVBAR ------\\

  $("ul li:nth-child(1)").hover(function () {
    $("#line").css("margin-left", "8px");
  });

  $("ul li:nth-child(2)").hover(function () {
    $("#line").css("margin-left", "112px");
  });

  $("ul li:nth-child(3)").hover(function () {
    $("#line").css("margin-left", "220px");
  });

  $("ul li:nth-child(4)").hover(function () {
    $("#line").css("margin-left", "331px");
  });

  $("ul li:nth-child(5)").hover(function () {
    $("#line").css("margin-left", "440px");
  });
  const $buttons = $(".demo__buttons");
  const $toggle = $(".demo__open-btn");
  let delay = 150;
  let steps = [];
  let open = false;

  let curStep = 0;

  for (let i = 0; i <= 3; i++) {
    steps[i] = "demo__step-" + i;
  }

  function setStep(index) {
    $buttons.removeClass("step-1 step-0 step-3 step-2").addClass("step-" + curStep);
  }

  function animate() {
    if (curStep >= 4) {
      curStep = 0;
      return;
    }

    open = true;
    setStep(curStep);
    curStep++;
    setTimeout(animate, delay);
  }

  $toggle.on("click", function () {
    if (!open) animate();
    else {
      $buttons.removeClass("step-1 step-0 step-3 step-2");
      open = false;
      curStep = 0;
    }
  });
  //----- MouseMove animation -----//
    var object1 = $("#object1");
    var object2 = $("#object2");
    var object3 = $("#object3");
    var layer = $("#layer");
    layer.mousemove(function (e) {
      var valueX = (e.pageX * 1 / 15);
      var valueY = (e.pageY * -1 / 100);
      object3.css({
        'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) rotate(-20deg)',
        'backface-visibility' : 'hidden',
        '-webkit-backface-visibility' : 'hidden'
      });
    });
    var object1 = $("#object1");
    var object2 = $("#object2");
    var object3 = $("#object3");
    var layer = $("#layer");
    layer.mousemove(function (e) {
      var valueX = (e.pageX * 1 / 150);
      var valueY = (e.pageY * -0.5 / 150);
      object2.css({
        'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0)',
        'backface-visiblity':'hidden',
        '-webkit-backface-visibility' : 'hidden',
      });
    });
    //----- MouseMove animation end -----//
    //----- Slide Section -----//
    $(".slide-section").click(function(e){
        var linkHref = $(this).attr('href');
        $('html , body').animate({
          scrollTop : $(linkHref).offset().top
        },1500);
        e.preventDefault();
    })
    //----- Slide Section End -----//
    $('.back-to-top').click(function(){
      $('html, body').animate({
        scrollTop:0
      },1800);
    });
});
  //----- svg animation -----\\
  $(window).scroll(function () {
    //--- variables ---\\
    var winTop = $(this).scrollTop();
    var phoneHeight = $("#phone").offset().top - 1000;
    var photoCameraHeight = $("#photo-camera").offset().top - 1100;
    var laptopHeight = $("#laptop").offset().top - 1000;
    var stripHeight = $(".photography-strip-svg").offset().top - 900;
    var servicesHeight = $("#services").offset().top + 1000;
    //--- functions ---\\
    if (winTop > photoCameraHeight) {

      $("#photo-camera").addClass("fadeInUp");
      $("#film-camera").addClass("fadeInDown");

    }
    if (winTop > laptopHeight) {

      $("#laptop").addClass("slideInRight");
      $("#mug").addClass("fadeInLeft");

    }
    if (winTop > phoneHeight) {

      $("#phone").addClass("slideInLeft-phone");

    }
    if (winTop > stripHeight) {
      $(".photography-strip-svg").addClass("fadeInRight");
    }
    if (winTop > servicesHeight) {
      $(".back-to-top").fadeIn();
    }
  });
  //------ svg animation -----//
