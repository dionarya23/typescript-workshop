//Abstract class adalah kelas abstrak yang tidak bisa di instansiasi langsung, 
// melainkan harus diturunkan ke child class nya

abstract class Kendaraan {
    
    abstract roda:number;

    start():void {
        console.log("Brummm")
    }

}

class Mobil extends Kendaraan {
    roda: number = 4;
}


let mobil = new Mobil();
mobil.roda
mobil.start()

class Motor extends Kendaraan {
    roda:number = 2;
}

let motor = new Motor();
motor.start()
motor.roda