import MediaPlayer from '@fernandojvela/platzimediaplayer';
import AutoPlay from '@fernandojvela/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@fernandojvela/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@fernandojvela/platzimediaplayer/lib/plugins/Ads'

const video: HTMLElement = document.querySelector("video");
const buttonPlay: HTMLElement = document.querySelector(".play");
const buttonMute: HTMLElement = document.querySelector(".mute");

const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error.message);
    });
}