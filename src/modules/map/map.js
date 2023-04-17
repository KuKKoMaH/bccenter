import { initResponsiveImage } from "../../js/initResponsiveImage";

const $map = $('.map');
if ($map.length) {
  const image = $map.find('.map__image')[0];
  const regions = $map.find('.map__regions')[0];

  const { width, height } = image.dataset;
  initResponsiveImage([+width, +height], image, regions);
}
