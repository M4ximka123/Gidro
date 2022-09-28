$(function(){
   $('.banner-section__slider').slick({
      dots: true,
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/arrow-prev.svg" alt="стрелка на право"></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-next.svg" alt="стрелка на право"></button>',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
   });
});