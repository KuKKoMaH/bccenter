const activeClass = 'faq__item--active';

$('.faq__item').each((i, el) => {
  let active = false;
  const $block = $(el);
  const $head = $block.find('.faq__head');
  const $content = $block.find('.faq__body');

  $head.on('click', function () {
    active = !active;
    const content = $content[0];

    if (active) {
      $content.css('max-height', content.scrollHeight);
      requestAnimationFrame(() => {
        $block.addClass(activeClass)
      });
    } else {
      $content.css('max-height', content.scrollHeight);
      requestAnimationFrame(() => {
        $content.css('max-height', 0);
        $block.removeClass(activeClass);
      });
    }

    setTimeout(() => {
      $content.css('max-height', '');
    }, 1000);
  });
});