const activeClassName = 'input--active';

function updateInput(parent, input) {
  if (input.value) {
    parent.classList.add(activeClassName);
  } else {
    parent.classList.remove(activeClassName);
  }
}

$('.input input').each((index, el) => {
  el.touched = false;
  const $input = $(el).parents('.input')[0];
  el.addEventListener('blur', function () {
    el.touched = true;
    el.value = el.value.trim();
  });
  el.addEventListener('change', function () {
    updateInput($input, el);
  });
  el.addEventListener('input', function () {
    updateInput($input, el);
  });
  updateInput($input, el);
  window.addEventListener("load", () => {
    updateInput($input, el);
  });
});
