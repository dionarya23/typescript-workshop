"use strict";
//membuat interface yang mengimplementasikan sebuah laptop
//setiap laptop mempunya spesifikasi berbeda
//akan tetapi ada hal yang sama
var Acer = /** @class */ (function () {
    function Acer(name, canRunGTA) {
        this.name = "Asus";
        this.canRunGTA = true;
        this.name = name;
        this.canRunGTA = canRunGTA;
    }
    Acer.prototype.on = function () {
        console.log("laptop menyala");
    };
    Acer.prototype.off = function () {
        console.log("Laptop nya mati");
    };
    return Acer;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, keyboardLight) {
        this.name = "Macbook";
        this.keyboardLight = true;
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Macbook.prototype.on = function () {
        throw new Error("Method not implemented.");
    };
    Macbook.prototype.off = function () {
        throw new Error("Method not implemented.");
    };
    return Macbook;
}());
var asus = new Acer("Acer", true);
var macbook = new Macbook("Acer", true);
