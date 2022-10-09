$(function () {
   $('.banner-section__slider').slick({
      dots: true,
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/arrow-prev.svg" alt="стрелка на право"></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-next.svg" alt="стрелка на право"></button>'
   });



   $('.tab').on('click', function (e) {
      e.preventDefault();

      $($(this).siblings()).removeClass('tab--active');
      $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');


      $(this).addClass('tab--active');
      $($(this).attr('href')).addClass('tabs-content--active');

   });


   $('.product-item__favorite').on('click', function () {
      $(this).toggleClass('product-item__favorite--active')
   });


   $('.product-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/icons/arrowblack-prev.svg" alt="стрелка на право"></button>',
      nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/icons/arrowblack-next.svg" alt="стрелка на право"></button>'
   });

   $('.filter-style').styler();

   $(".filter__item-drop").on('click', function () {
      $(this).toggleClass('filter__item-drop--active');
      $(this).next().slideToggle('200');
   });

   $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 100000,
      max: 500000,
   });

}); 