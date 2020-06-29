"use strict";
//Generic adalah type data dinamis yang bisa dipakai pada sebuah function sehingga terjamin keamanan tipe datanya
//jika kita membuat function semacam ini nantinya akan mendapatkan kendala
function getData(value) {
    return value;
}
console.log(getData("Dion"));
console.log(getData(89289));
//Generic
function myData(value) {
    return value;
}
console.log(myData("Dion"));
console.log(myData(89289));
//generic pada arrow function
var arrowFunction = function (value) {
    return value;
};
