$('.img').each((i, el) => {
  const $el = $(el);
  const $background = $el.find('.img__background');
  if ($background.length) {
    const $img = $el.find('.img__image img');
    const img = $img[0];
    const background = $background[0];
    const originalSize = [img.naturalWidth, img.naturalHeight];

    const updateScale = () => {
      requestAnimationFrame(() => {
        const scale = img.clientWidth / originalSize[0];
        background.style.transform = `translate(-50%, -50%) scale(${scale})`;
      })
    }

    window.addEventListener('resize', updateScale, { passive: true });
    updateScale();
  }
});
