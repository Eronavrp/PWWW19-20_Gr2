$(window).on('load',function () {
    $('#drop').hover(function(){
      $('.dropdown-content').slideDown(500);
    },function(){
      $('.dropdown-content').slideUp(1500);
    });
  });