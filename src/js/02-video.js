import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

let iframe = document.querySelector('iframe');
let player = new Player(iframe);

player.on('timeupdate', throttle(onPlayerClick, 1000));

function onPlayerClick(e) {
  localStorage.setItem('currentTime', e.seconds);
}

player.setCurrentTime(localStorage.getItem('currentTime'));
