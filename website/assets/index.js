"use strict";
exports.__esModule = true;
var MediaPlayer_1 = require("./MediaPlayer");
var AutoPlay_1 = require("./plugins/AutoPlay");
var AutoPause_1 = require("./plugins/AutoPause");
var Ads_1 = require("./plugins/Ads");
var video = document.querySelector("video");
var buttonPlay = document.querySelector(".play");
var buttonMute = document.querySelector(".mute");
var player = new MediaPlayer_1["default"]({
    el: video,
    plugins: [new AutoPlay_1["default"](), new AutoPause_1["default"](), new Ads_1["default"]()]
});
buttonPlay.onclick = function () { return player.togglePlay(); };
buttonMute.onclick = function () { return player.toggleMute(); };
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')["catch"](function (error) {
        console.log(error.message);
    });
}
