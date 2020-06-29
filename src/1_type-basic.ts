// typescript adalah static typing
// misal kita membuat sebuah variable :
//dengan nama_variable nama, value dion type data string
let nama = "Dion";

//jika kita mengisi variable nama dengan type data lain maka
// akan terjadi error
// nama = 2342 //error

//maka dari itu ia harus sesuai dengan type data yang
// sebelumnya dideklarasi
nama = "Pamungkas";


//selain penulisan diatas ts juga bisa ditulis
// seperti ini
let nama_teman: string;
nama_teman="Arya";

//tipe data number
let umur = 19
let umur_ayah: number = 50;


//tipe data_boolean
let isJomblo = true
let isMaried: boolean = true;
isJomblo = false

//tipe data any , tipe data ini bisa masuk tipe data apa saja
let kota:any;
kota = "Bekasi";
kota=1133;
kota=true
kota= ["halo", "bro"];
kota = {
    nama: "bekasi",
    umur: "123"
} 
// any seperti javascript pada umumnya


//union menentukan sebuah variable mempunyai tipe data dari satu
//kasus no
// 6287800088969
// 087800088969 //jika ini sebuah  number nol nya pasti akan dihapus

let phoneNumber: string | number;
phoneNumber = 6287700088939
phoneNumber = "087800089398"