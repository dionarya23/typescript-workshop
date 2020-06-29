//enum adalah sebuah tipe data yang menyimpan data constant
//layaknya seperti file .env yang menyimpan berbagai macam file configurasi

//numeric enum
enum Month {
    JAN = 1, // bisa dikostum dengan menambahkan value awal, default mulai dari 0
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AGS,
    SEP,
    OKT,
    NOV,
    DES
}

console.log(Month) //mengeluarkan indeks
console.log(Month.JAN) // indeks jan


// string enum
enum Bulan {
    JAN = "Januari",
    FEB = "Februari",
    MAR = "Maret",
    APR = "April",
    MAY = "Mei",
    JUN = "Juni",
    JUL = "Juli",
    AGS = "Agustus",
    SEP = "September",
    OKT = "Oktober",
    NOV = "November",
    DES = "Desember"
}

console.log(Bulan.FEB);