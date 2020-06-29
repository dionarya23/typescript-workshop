"use strict";
//function dengan membalikan tipe data
function getNama() {
    return "Dion Arya Pamungkas";
    //jika misal dia nggak mereturn diakan erorr
}
console.log(getNama());
function getUmur() {
    return 19;
}
console.log(getUmur());
function sayhello() {
    console.log("Hallo bro");
}
sayhello();
///argument types
function tambahan(val1, val2) {
    return val1 + val2;
}
console.log(tambahan(10, 20));
var Add = function (val1, val2) {
    return val1 + val2;
};
//default parameter
var fullName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Pamungkas"; }
    return firstName + " " + lastName;
};
console.log(fullName("Dion"));
//optional parameter
var getFriends = function (val1, val2) {
    return val1 + " " + val2;
};
//optional parameter pada number
//optional parameter tidak disarankan pada function yang membalikan number
// const getUmur = (val1:number, val2?:number):number => {
//     return val1 + val2;
// }
console.log(getFriends("A"));
// console.log(getUmur(1, 2));
