// full time  8 
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
// contract 
var Employee = /** @class */ (function () {
    // parameterisied constructor
    function Employee(name, paymentPerHour) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }
    return Employee;
}());
//let empl = new Employee();
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(name, paymentPerHour, hoursOfWorking) {
        var _this = 
        // parent class constructor by using super.
        _super.call(this, name, paymentPerHour) || this;
        _this.hoursOfWorking = hoursOfWorking;
        return _this;
    }
    Contractor.prototype.CalculateSalary = function () {
        return this.paymentPerHour * this.hoursOfWorking;
    };
    return Contractor;
}(Employee));
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    // parameterised contructor
    function FullTimeEmployee(name, paymentPerHour) {
        return _super.call(this, name, paymentPerHour) || this;
    }
    FullTimeEmployee.prototype.CalculateSalary = function () {
        return this.paymentPerHour * 8;
    };
    return FullTimeEmployee;
}(Employee));
var objcontractor = new Contractor('Harry', 8, 10); // 40 
var objfullTimeEmployee = new FullTimeEmployee('Jack', 8);
console.log(objcontractor.CalculateSalary());
console.log(objfullTimeEmployee.CalculateSalary());
