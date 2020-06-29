"use strict";
//pada js tidak ada namanya class adanya sebuah prototype
//jika terdapat class pada typescript hasil compile dari js nya adalah prototipe
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this.age = age;
        this.name = name;
    }
    //alternatif penulisan contructor
    //constructor(public name: string) {
    // }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
//public = bisa diakses semua class/dari luar class
//protected = hanya bisa diakses dari class tersebut dan class turunannya
//private = hanya bisa di akses dari class itu sendiri
var user = new User("Dion", 30);
console.log(user);
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        //tipe nya kosong
        _this.email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "_email", {
        get: function () {
            return this.email;
        },
        //set tidak boleh return apa apa
        set: function (value) {
            //bisa digunakan sebagai validator juga
            this.email = value;
        },
        enumerable: false,
        configurable: true
    });
    Admin.getNameRoles = function () {
        return "hey";
    };
    Admin.getRoleName = "Admin";
    return Admin;
}(User));
// let admin = new Admin("08843949328", "Dion", 21);
// admin.getName()
// admin._email = "dionarya.p@gmail.com"
// admin._email
//setter dan getter
// static property atau method
// adalah sebuah property atau methhd yang bisa diambil tanpa harus menisiasi class dengan object itu sendiri
var admin = Admin.getRoleName;
