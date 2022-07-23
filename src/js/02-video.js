import throttle from 'lodash.throttle'
import Player from '@vimeo/player';



const iframe = document.querySelector("iframe");
const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player(iframe);
getTime()
player.on('timeupdate', throttle(setTime, 500));

function setTime (data) {
   console.log('play')
   localStorage.setItem(STORAGE_KEY, data.seconds)

};

function getTime() {
   const saveVideoTime = localStorage.getItem(STORAGE_KEY);

   if (saveVideoTime){
     console.log(saveVideoTime)
     player.setCurrentTime(saveVideoTime)
     
   }
}




