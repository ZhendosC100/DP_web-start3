
      $(document).ready(function(){

        // main page
        var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 4,
      width: 580,
      slidesPerGroup: 1,
      loop: true,
      // loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.next_arrow',
        prevEl: '.prev_arrow',
      },

      breakpoints: {
        750: {
          spaceBetween: 4,
          slidesPerView: 2,
        },
        650: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }

    });
        
});
  