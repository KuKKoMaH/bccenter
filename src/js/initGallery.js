import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { BREAKPOINT_LG } from "./breakpoints";

const initGallery = ({ container, itemsSelector }) => {
  const lightbox = new PhotoSwipeLightbox({
    gallery:    container,
    children:   itemsSelector,
    paddingFn:  (viewportSize, itemData, index) => {
      const isMobile = viewportSize.x < BREAKPOINT_LG;
      const padding = isMobile ? 8 : 16;
      return {
        top:    padding,
        bottom: isMobile ? 96 : 114,
        left:   padding,
        right:  padding,
      };
    },
    pswpModule: () => import('photoswipe')
  });
  lightbox.on('uiRegister', function () {
    lightbox.pswp.ui.registerElement({
      name:      'bulletsIndicator',
      className: 'pswp__bullets',
      appendTo:  'wrapper',
      onInit:    (el, pswp) => {
        const bullets = [];
        let bullet;
        let prevIndex = -1;

        for (let i = 0; i < pswp.getNumItems(); i++) {
          bullet = document.createElement('div');
          bullet.className = 'pswp__bullet';
          bullet.onclick = (e) => {
            pswp.goTo(bullets.indexOf(e.target));
          };
          el.appendChild(bullet);
          bullets.push(bullet);
        }

        pswp.on('change', (a) => {
          if (prevIndex >= 0) {
            bullets[prevIndex].classList.remove('pswp__bullet--active');
          }
          bullets[pswp.currIndex].classList.add('pswp__bullet--active');
          prevIndex = pswp.currIndex;
        });


      }
    });

    lightbox.pswp.ui.registerElement({
      name:      'thumbnails',
      className: 'pswp__thumbnails',
      appendTo:  'wrapper',
      onInit:    (el, pswp) => {
        const items = pswp.options.dataSource.items;
        items.forEach(item => {
          const src = item.dataset.thumbnail;
          if (src) {
            const thumbnail = document.createElement('img');
            thumbnail.src = src;
            el.appendChild(thumbnail);
          }
        })
      }
    });
  });
  lightbox.init();
};

export default initGallery;
