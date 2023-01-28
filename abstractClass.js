var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Car.prototype.CheckAC = function () {
        return 'Ac is available';
    };
    Car.prototype.CallFacility = function () {
        return "Call facility supported";
    };
    return Car;
}());
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundyai.prototype.Price = function () {
        return 900000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyai.prototype.Color = function () {
        return 'gray';
    };
    Hundyai.prototype.gpsSupported = function () {
        return true;
    };
    return Hundyai;
}(Car));
var hundai = new Hundyai();
// console.log(hundai.CallFacility());
console.log("Is Hundai GPS Supported?: ", hundai.gpsSupported());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return 'white';
    };
    Toyota.prototype.gpsSupported = function () {
        return false;
    };
    return Toyota;
}(Car));
var toyotaCar1 = new Toyota();
console.log("Is Toyota GPS Supported?: ", toyotaCar1.gpsSupported());
var Tata = /** @class */ (function (_super) {
    __extends(Tata, _super);
    function Tata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tata.prototype.Price = function () {
        return 11000000;
    };
    Tata.prototype.getTotalSeats = function () {
        return 7;
    };
    Tata.prototype.Color = function () {
        return 'white';
    };
    Tata.prototype.gpsSupported = function () {
        return false;
    };
    return Tata;
}(Car));
var toyota = new Toyota();
// console.log(toyota.CallFacility());
// 
// Price -- both have price but diff price .. 
// Total seats -- both have total seats but diff seats 
// colors-- both car are the diff colors .
// we can solve this problem by using abstract class ..
// 
// let objCar = new Car();// we can not create a instace or object of abstract class .
