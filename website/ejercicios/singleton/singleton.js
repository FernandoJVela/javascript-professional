"use strict";
exports.__esModule = true;
var Singleton = /** @class */ (function () {
    function Singleton() {
        //Init
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
exports["default"] = Singleton;
