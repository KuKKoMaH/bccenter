import MicroModal from 'micromodal';

let player = null;
let apiLoaded = false;

const config = {
  disableScroll:       true,
  awaitCloseAnimation: true,
  onShow:              (modal, button, event) => {
    if (!event) return;
    let $el = $(event.target);
    if (!$el.data('youtubeId')) $el = $el.parents('[data-youtube-id]');
    const youtubeId = $el.data('youtubeId');
    if (youtubeId) {
      const initPlayer = () => {
        player = new YT.Player($(modal).find('.popup__iframe > *')[0], {
          height:  '100%',
          width:   '100%',
          videoId: youtubeId,
          events:  {
            'onReady': () => player.playVideo(),
          }
        });
      }

      if (apiLoaded) {
        initPlayer();
      } else {
        window.onYouTubeIframeAPIReady = () => {
          apiLoaded = true;
          initPlayer();
        }
        scriptLoader('https://www.youtube.com/iframe_api');
      }
    }
  },
  onClose:             modal => {
    if (player) player.destroy();
  },
};

MicroModal.init(config);

window.showModal = (modalId) => {
  $('.popup.is-open').each((i, el) => {
    if (el.id === modalId) return;
    MicroModal.close(el.id);
  });
  MicroModal.show(modalId, config);

};

window.showThank = () => showModal('thank-modal');
