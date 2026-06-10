var swiper = new Swiper(".slide-swp", {
   cssMode: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable:true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    autoplay:{
        delay:2500,
    },
    loop:true,
      mousewheel: true,
      keyboard: true,
  });




     var swiper = new Swiper(".slide_product", {
      cssMode: true,
    slidesPerView: 5,
    spaceBetween:20,
    autoplay:{
    delay:2500,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    
    breakpoints:{
      1200:{
        slidesPerView : 5,
        spaceBetween: 20
      },
      1000:{
        slidesPerView : 4,
        spaceBetween: 20
      },
      700:{
        slidesPerView: 3 , 
        spaceBetween: 15 ,

      },
      0:{
        slidesPerView : 2,
        spaceBetween: 10
      }
    }
  });



