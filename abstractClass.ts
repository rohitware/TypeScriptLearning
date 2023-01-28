abstract class Car {
    Wheel(): string {
        return '4 wheeler';
    }

    CheckAC(): string {
        return 'Ac is available';
    }

    CallFacility(): string {
        return "Call facility supported"
    }

    abstract Price(): number;
    abstract getTotalSeats(): number;
    abstract Color(): string;
    abstract gpsSupported(): boolean;
}

class Hundyai extends Car {
    Price(): number {
        return 900000;
    }
    getTotalSeats(): number {
        return 7;
    }
    Color(): string {
        return 'gray';
    }
    gpsSupported(): boolean{
        return true;
    }
}

let hundai = new Hundyai();

// console.log(hundai.CallFacility());
console.log(`Is Hundai GPS Supported?: `, hundai.gpsSupported());


class Toyota extends Car {
    Price(): number {
        return 1000000;
    }
    getTotalSeats(): number {
        return 5;
    }
    Color(): string {
        return 'white';
    }
    gpsSupported(): boolean{
        return false;
    }
}
let toyotaCar1 = new Toyota();
console.log(`Is Toyota GPS Supported?: `, toyotaCar1.gpsSupported());


class Tata extends Car {
    Price(): number {
        return 11000000;
    }
    getTotalSeats(): number {
        return 7;
    }
    Color(): string {
        return 'white';
    }
    gpsSupported(): boolean{
        return false;
    }
}

let toyota = new Toyota();

// console.log(toyota.CallFacility());
// 

// Price -- both have price but diff price .. 
// Total seats -- both have total seats but diff seats 
// colors-- both car are the diff colors .

// we can solve this problem by using abstract class ..

// 

// let objCar = new Car();// we can not create a instace or object of abstract class .

