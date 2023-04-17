import { initResponsiveImage } from "../../js/initResponsiveImage";

const $sbg = $('.sbg');
if ($sbg.length) {
  const img = $sbg.find('img')[0];
  const container = $sbg.find('.sbg__img')[0]
  const links = $sbg.find('.sbg__links')[0];
  initResponsiveImage([img.naturalWidth, img.naturalHeight], container, links);
}
