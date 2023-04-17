export const initResponsiveImage = (originalSize, container, element) => {
  element.style.width = originalSize[0] + 'px';
  element.style.height = originalSize[1] + 'px';
  const updateScale = () => {
    requestAnimationFrame(() => {
      const scale = container.clientWidth / originalSize[0];
      element.style.transform = `translate(-50%, -50%) scale(${scale})`;
    })
  }

  window.addEventListener('resize', updateScale, { passive: true });
  updateScale();
}