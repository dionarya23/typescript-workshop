"use strict";
//Abstract class adalah kelas abstrak yang tidak bisa di instansiasi langsung, 
// melainkan harus diturunkan ke child class nya
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kendaraan = /** @class */ (function () {
    function Kendaraan() {
    }
    Kendaraan.prototype.start = function () {
        console.log("Brummm");
    };
    return Kendaraan;
}());
var Mobil = /** @class */ (function (_super) {
    __extends(Mobil, _super);
    function Mobil() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.roda = 4;
        return _this;
    }
    return Mobil;
}(Kendaraan));
var mobil = new Mobil();
mobil.roda;
mobil.start();
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.roda = 2;
        return _this;
    }
    return Motor;
}(Kendaraan));
var motor = new Motor();
motor.start();
motor.roda;
