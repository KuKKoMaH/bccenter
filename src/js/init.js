import IMask from 'imask';

// import './initMap';
import './initPopups';
import "src/js/initGallery";
import initGallery from "src/js/initGallery";

const $share = $('.share');
if ($share.length) {
  scriptLoader('https://yastatic.net/share2/share.js', () => {
    $share.each((i, el) => Ya.share2(el));
  });
}

document.querySelectorAll('input[type="tel"]').forEach(el => {
  IMask(el, {
    mask: '+{7} (000) 000-00-00',
  });
});


// $('input[type="tel"]').mask("+7 (999) 999-99-99");

$('.select').each((i, el) => {
  let options
  try {
    options = JSON.parse(el.dataset.selectize);
  } catch (e) {}
  $(el).selectize({
    ...options,
    dropdownParent: 'body'
  });
});

$('.toTop').on('click', () => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$('.file').each((i, el) => {
  const $el = $(el);
  const $name = $el.find('.file__name');
  const originalText = $name.text();
  $el.find('input[type="file"]').on('change', function () {
    const files = $(this)[0].files;
    $name.text(files.length ? files[0].name : originalText);
  });
});

$('[data-gallery]').each((i, el) => {
  initGallery({ container: el, itemsSelector: '[data-gallery-item]' });
});
