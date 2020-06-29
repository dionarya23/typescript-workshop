//pada js tidak ada namanya class adanya sebuah prototype
//jika terdapat class pada typescript hasil compile dari js nya adalah prototipe

export class User {
    public name:string;
   
     constructor(name:string, public age:number) {
        this.name = name
    }

    //alternatif penulisan contructor
    //constructor(public name: string) {
    // }

    setName(value:string):void {
        this.name = value
    }

    getName():string {
        return this.name
    }
}

//public = bisa diakses semua class/dari luar class
//protected = hanya bisa diakses dari class tersebut dan class turunannya
//private = hanya bisa di akses dari class itu sendiri

const user = new User("Dion", 30);
console.log(user)

class Admin extends User {
    read: boolean  = true
    write: boolean = true
    phone:string;
    static getRoleName:string = "Admin"
    //tipe nya kosong
    private email:string = "";

    constructor(phone:string, name:string, age:number){
        super(name, age)
        this.phone = phone
    }

    getRole(): {read:boolean, write: boolean} {
        return {
            read  : this.read,
            write : this.write 
        };
    }

    //set tidak boleh return apa apa
    set _email(value:string) {
        //bisa digunakan sebagai validator juga
        this.email=value
    }

    get _email():string {
        return this.email
    }
    
    static getNameRoles():string {
        return "hey"
    }

}

// let admin = new Admin("08843949328", "Dion", 21);
// admin.getName()
// admin._email = "dionarya.p@gmail.com"
// admin._email
//setter dan getter



// static property atau method
// adalah sebuah property atau methhd yang bisa diambil tanpa harus menisiasi class dengan object itu sendiri

let admin = Admin.getRoleName