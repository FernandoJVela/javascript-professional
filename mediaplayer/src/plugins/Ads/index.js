"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ads_1 = __importDefault(require("./Ads"));
var AdsPlugin = /** @class */ (function () {
    function AdsPlugin() {
        this.ads = Ads_1.default.getInstance();
        this.AdsContainer = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    AdsPlugin.prototype.run = function (player) {
        this.player = player;
        this.player.container.appendChild(this.AdsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    };
    AdsPlugin.prototype.handleTimeUpdate = function () {
        var currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    };
    AdsPlugin.prototype.renderAd = function () {
        var _this = this;
        if (this.currentAd) {
            return;
        }
        var ad = this.ads.getAd();
        this.currentAd = ad;
        this.AdsContainer.innerHTML = "\n        <div class=\"pub\">\n        <a class=\"pub__link\" href=\"" + this.currentAd.url + "\"> \t\n          <img class=\"pub__img\" src=\"" + this.currentAd.imageUrl + "\" />\n          <div class=\"pub__info\">\n            <h5 class=\"pub__title\">" + this.currentAd.title + "</h5>\n            <p class=\"pub__body\">" + this.currentAd.body + "</p>\n          </div>\n        </a>\n        </div>";
        setTimeout(function () {
            _this.currentAd = null;
            _this.AdsContainer.innerHTML = '';
        }, 10000);
    };
    return AdsPlugin;
}());
exports.default = AdsPlugin;
