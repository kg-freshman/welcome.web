$(function(){
  $(document).ready(function(){

    $(function() {
    var w = $(window).width();
    if (w >= 670) {
        setTimeout(function(){
          $('.index_menu_container').fadeIn(2000);
        },1000);
      } else {
        setTimeout(function(){
          $('.index_menu_container_sp').fadeIn(2000);
        },1000);
      };
      }
    );



  })

  $('.close').click(function(){
    $('.header_sp').fadeOut();
  });

  $('.header_sp_icon').click(function(){
    $('.header_sp').fadeIn();
  });

  $('.header_logo').click(function(){
    window.location.href = "/";
  })
})
