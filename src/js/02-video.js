import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';
const localCurrentTime = localStorage.getItem(currentTime);

const onPlay = function (timeUpdate) {
  console.log(timeUpdate);
  localStorage.setItem(currentTime, timeUpdate.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localCurrentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError': break;
      default: break;
    }
  });


