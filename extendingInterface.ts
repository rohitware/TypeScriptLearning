interface IExterior {
    color: string;
    numOfDoors: number;
}

interface IInterior {
    seats: number;
    auto: boolean;
}

interface IAC {
    ac: boolean;

}
interface ICar extends IExterior, IInterior {
    make: string;
    model: string;
    year: number
}

var myCar: ICar = {
    make: "Tata",
    model: "Altroz",
    year: 2018,
    color: "BLACK",
    numOfDoors: 4,
    seats: 5,
    auto: false
}