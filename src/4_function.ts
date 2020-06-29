//function dengan membalikan tipe data

function getNama():string {
    return "Dion Arya Pamungkas";
    //jika misal dia nggak mereturn diakan erorr
}
console.log(getNama())

function getUmur():number {
    return 19
}

console.log(getUmur());

function sayhello():void {
    console.log("Hallo bro")
}

sayhello();

///argument types

function tambahan(val1:number, val2:number):number {
    return val1+val2
}

console.log(tambahan(10,20));

//function as type
//misal dalam timm kita sudah menentukan
//function tambah harus bertipe number
type Tambah = (val1:number, val2:number) => number;

const Add: Tambah = (val1: number, val2:number): number => {
    return val1+val2;
}

//default parameter

const fullName = (firstName:string, lastName:string = "Pamungkas"):string => {
    return firstName + " " + lastName
}

console.log(fullName("Dion"));

//optional parameter
const getFriends = (val1:string, val2?:string):string => {
    return val1 + " " + val2;
}

//optional parameter pada number
//optional parameter tidak disarankan pada function yang membalikan number
// const getUmur = (val1:number, val2?:number):number => {
//     return val1 + val2;
// }

console.log(getFriends("A"));
// console.log(getUmur(1, 2));