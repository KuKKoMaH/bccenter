$('.img').each((i, el) => {
  const $el = $(el);
  const $background = $el.find('.img__background');
  if ($background.length) {
    const $img = $el.find('.img__image img');
    const img = $img[0];
    const background = $background[0];

    const virtualImg = new Image();
    virtualImg.onload = () => {
      console.log('!!!')
      const originalSize = [virtualImg.naturalWidth, virtualImg.naturalHeight];
      const updateScale = () => {
        requestAnimationFrame(() => {
          const scale = img.clientWidth / originalSize[0];
          console.log(img.clientWidth, originalSize[0], scale)
          background.style.transform = `translate(-50%, -50%) scale(${scale})`;
        })
      }

      window.addEventListener('resize', updateScale, { passive: true });
      updateScale();
    }

    if (img.complete) {
      virtualImg.src = img.currentSrc;
    } else {
      img.onload = () => {
        virtualImg.src = img.currentSrc;
      }
    }
  }
});
