import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe')

const player = new Player(iframe);

const STORAGE_TIME = 'videoplayer-current-time';

const playerOn = function (event) {
    localStorage.setItem(STORAGE_TIME, event.seconds);
};
player.on('timeupdate', throttle(playerOn, 500));

const currentTime = localStorage.getItem(STORAGE_TIME)
player.setCurrentTime(currentTime || 0); 