$(document).ready(function(){
    //add togglr bar
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    /*add sticky to header*/
     $(window).scroll(function(){
         var sc = $(this).scrollTop();
         if (sc > 100)
         {
            $('header').addClass('sticky');
         }
            else
            {
            $('header').removeClass('sticky');   
         }
         
     });
     $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    });
    
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

 $(window).load(function() {
    $(".loading-overlay").delay(3000).fadeOut("slow",function(){
        $("body").css("overflow","auto")
    });
    
});
$(window).on('resize', function(){
   if($(window).width() > 637){
      $('.nav-list').show();
   }
});