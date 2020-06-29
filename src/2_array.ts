//array pada ts
let array = [1,2,3,4,5,6];
// array = ['string', 'string2'] ini akan error karena
// array diatas harus berupa number atau integer

let names: string[];

names = ["dion", "arya"];

//jika ingin membutuhkan array dengan berbagai tipe data
let array3: any[];
array3 = ["dion", 21, true];

//tuples sebuah array yang isinya bisa berbagai tipe data akan tetapi isi nya terbatas
let biodata: [string, number];
biodata = ["Surabaya", 1930];
// biodata = ["Bekasi", true] akan error karena bukan number


