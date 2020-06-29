//membuat interface yang mengimplementasikan sebuah laptop
//setiap laptop mempunya spesifikasi berbeda
//akan tetapi ada hal yang sama

// Interface adalah sebuah kontrak atau blueprint yang harus
// wajib di implementasikan kedalam sebuah class.

interface Laptop {
    name:string;
    on():void;
    off():void;
}

class Acer implements Laptop {
    name: string = "Asus";
    canRunGTA = true;

    constructor(name:string, canRunGTA:boolean) {
        this.name = name;
        this.canRunGTA=canRunGTA;
    }

    on(): void {
        console.log("laptop menyala")
    }


    off(): void {
       console.log("Laptop nya mati")
    }
    
}

class Macbook implements Laptop {
    name: string  = "Macbook";
    keyboardLight = true

    constructor(name:string, keyboardLight:boolean) {
        this.name = name;
        this.keyboardLight=keyboardLight;
    }

    on(): void {
        throw new Error("Method not implemented.");
    }

    off(): void {
        throw new Error("Method not implemented.");
    }
    
}

let asus    = new Acer("Acer", true);
let macbook = new Macbook("Acer", true);