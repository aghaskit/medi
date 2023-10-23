$('.slider__box').slick({
    prevArrow: '<button type="button" class="slider__left-arrow"><img src="img/leftArrow.svg" alt="prev arrow"></button>',
    nextArrow: '<button type="button" class="slider__right-arrow"><img src="img/rightArrow.svg" alt="next arrow"></button>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            autoplay: true,
          }
        },
      ]
});

let burger = document.querySelector('.burger')
let menu = document.querySelector('.header__all')

burger.addEventListener('click', function() {
    menu.classList.toggle('open')
    burger.classList.toggle('color')
})