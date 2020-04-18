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
    window.location.href = "https://kg-freshman.github.io/welcome.web/";
  });

  $(".header_menu_btn").hover(
    function(){
      $(this).children('a').animate({
        'color':'#ff7f50'
      },500);
    },function(){
      $(this).children('a').animate({
        'color':'white'
      },500);
    }
  );

  $(".campus_capsule").hover(
    function(){
      $(this).animate({
        'background-color':'rgba(181,181,181,0.95)'
      },500);
    },function(){
      $(this).animate({
        'background-color':'rgba(255,255,255,0.95)'
      },500);
    }
  );

  $('.index_menu2_icon').hover(
    function(){
      $('.index_menu2').fadeIn();
    },function(){

    }
  );

  $('.index_menu2').hover(
    function(){
    },function(){
      $('.index_menu2').fadeOut();
    }
  );

  $('.tag').click(
    function(){
      $('.club_cell').hide();
      var tag_name = $(this).data('tag');
      $("." + tag_name).show();
      }

  );

  $('#search_detail').click(
    function(){
      if($('.search_tags_detail').hasClass('active')){
        $('.search_tags_detail').slideUp();
        $('.search_tags_detail').removeClass('active');
      } else {
      $('.search_tags_detail').slideDown();
      $('.search_tags_detail').addClass('active');
      }
    }
  );


})
