import { initResponsiveImage } from "../../js/initResponsiveImage";

const $sbg = $('.sbg');
if ($sbg.length) {
  const img = $sbg.find('img')[0];

  const virtualImg = new Image();
  virtualImg.onload = () => {
    const container = $sbg.find('.sbg__img')[0]
    const links = $sbg.find('.sbg__links')[0];
    initResponsiveImage([virtualImg.naturalWidth, virtualImg.naturalHeight], container, links);
    $sbg.find('.sbg__img').addClass('sbg__img--init');
  }
  virtualImg.src = img.src;
}
