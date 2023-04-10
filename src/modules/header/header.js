const headerMenuActiveClass = 'header--menu';
const headerSearchActiveClass = 'header--search';
const searchActiveClass = 'header__search--active';
const $header = $('.header');
const $search = $('.header__search');
const $searchInput = $('.header__search-input input');
const $searchContent = $('.header__search-content');

$('.header__menu-button').on('click', () => {
  $header.toggleClass(headerMenuActiveClass);
})

$('.header__expand').on('click', (e) => {
  const $el = $(e.currentTarget);
  const $item = $el.parents('li');
  const $submenu = $item.find('.header__submenu');
  if ($item.hasClass('active')) {
    $submenu.css('max-height', $submenu[0].scrollHeight);
    requestAnimationFrame(() => {
      $submenu.css('max-height', 0);
    })
  } else {
    $submenu.css('max-height', $submenu[0].scrollHeight);
  }
  setTimeout(() => $submenu.css('max-height', ''), 500);
  $item.toggleClass('active');
})

$('.header__search-button').on('click', () => {
  $header.toggleClass(headerSearchActiveClass);
  if ($header.hasClass(headerSearchActiveClass)) {
    setTimeout(() => $searchInput.focus(), 500);
  }
})

$('.header__search-suggests button').on('click', (e) => {
  $searchInput.val(e.target.innerText);
  updateSearch();
})

$('.header__search-clear').on('click', () => {
  $searchInput.val('');
  updateSearch();
})

$searchInput.on('input', (e) => {
  updateSearch();
})

const updateSearch = () => {
  $searchContent.scrollTop(0);
  if ($searchInput.val()) {
    $search.addClass(searchActiveClass);
  } else {
    $search.removeClass(searchActiveClass);
  }
}