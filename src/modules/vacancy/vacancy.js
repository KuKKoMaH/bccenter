import initTabs from "../../js/initTabs";

initTabs({
  $headers:          $('.vacancy__heads .chip'),
  $bodies:           $('.vacancy__body'),
  headerActiveClass: 'chip--active',
  bodyActiveClass:   'vacancy__body--active',
})