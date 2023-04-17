import initTabs from "../../js/initTabs";

$('.tabs').each((i, el) => {
  const $el = $(el);
  initTabs({
    $headers:          $el.find('.tabs__head'),
    $bodies:           $el.find('.tabs__body'),
    headerActiveClass: 'tabs__head--active',
    bodyActiveClass:   'tabs__body--active',
  });
});

