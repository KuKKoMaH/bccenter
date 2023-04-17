import initSlider from "src/js/initSlider";

initSlider('.realize__slider', ($el) => ({
  wrapperClass: 'realize__slides',
  slideClass:   'realize__slide',
  pagination:   {
    el:        $el.parents('.realize').find('.realize__nav')[0],
    clickable: true,
  },
  // touchEventsTarget: 'wrapper',
  slidesPerView: 1,
}));