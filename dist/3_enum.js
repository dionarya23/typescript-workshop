"use strict";
//enum adalah sebuah tipe data yang menyimpan data constant
//layaknya seperti file .env yang menyimpan berbagai macam file configurasi
//numeric enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
    Month[Month["JUN"] = 6] = "JUN";
    Month[Month["JUL"] = 7] = "JUL";
    Month[Month["AGS"] = 8] = "AGS";
    Month[Month["SEP"] = 9] = "SEP";
    Month[Month["OKT"] = 10] = "OKT";
    Month[Month["NOV"] = 11] = "NOV";
    Month[Month["DES"] = 12] = "DES";
})(Month || (Month = {}));
console.log(Month); //mengeluarkan indeks
console.log(Month.JAN); // indeks jan
// string enum
var Bulan;
(function (Bulan) {
    Bulan["JAN"] = "Januari";
    Bulan["FEB"] = "Februari";
    Bulan["MAR"] = "Maret";
    Bulan["APR"] = "April";
    Bulan["MAY"] = "Mei";
    Bulan["JUN"] = "Juni";
    Bulan["JUL"] = "Juli";
    Bulan["AGS"] = "Agustus";
    Bulan["SEP"] = "September";
    Bulan["OKT"] = "Oktober";
    Bulan["NOV"] = "November";
    Bulan["DES"] = "Desember";
})(Bulan || (Bulan = {}));
console.log(Bulan.FEB);
