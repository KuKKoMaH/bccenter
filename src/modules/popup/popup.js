import initTabs from "src/js/initTabs";

$('.popup__tabs').each((i, el) => {
  const $el = $(el);
  initTabs({
    $headers:          $el.find('.popup__tabs-head'),
    $bodies:           $el.find('.popup__tabs-body'),
    headerActiveClass: 'popup__tabs-head--active',
    bodyActiveClass:   'popup__tabs-body--active',
  });
})

const WIZARD_BODY_ACTIVE_CLASS = 'popup__wizard-body--active';
const WIZARD_HEAD_ACTIVE_CLASS = 'popup__wizard-head--active';
$('[data-wizard-next]').click((e) => {
  e.preventDefault();
  const $wizard = $(e.delegateTarget).parents('.popup__wizard')
  updateStep($wizard, true);
})
$('[data-wizard-prev]').click((e) => {
  e.preventDefault();
  const $wizard = $(e.delegateTarget).parents('.popup__wizard')
  updateStep($wizard, false);
})

const updateStep = ($wizard, isNext) => {
  const $bodies = $wizard.find('.popup__wizard-body');
  const $currentBody = $bodies.filter('.' + WIZARD_BODY_ACTIVE_CLASS);
  const currentStep = $bodies.filter('.' + WIZARD_BODY_ACTIVE_CLASS).index();
  const nextStep = currentStep + (isNext ? 1 : -1);
  const $nextBody = $bodies.eq(nextStep);
  if (!$nextBody.length || nextStep < 0) return;
  $currentBody.removeClass(WIZARD_BODY_ACTIVE_CLASS);
  $nextBody.addClass(WIZARD_BODY_ACTIVE_CLASS);
  $wizard.css('--step', nextStep + 1 + '');

  const $heads = $wizard.find('.popup__wizard-head');
  $heads.removeClass(WIZARD_HEAD_ACTIVE_CLASS);
  $heads.eq(nextStep).addClass(WIZARD_HEAD_ACTIVE_CLASS);
}