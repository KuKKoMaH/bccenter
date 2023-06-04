$('.clients__slides').each((i, el) => {
  el.style.setProperty('--clients-width', (el.scrollWidth / 2) + 'px');
})