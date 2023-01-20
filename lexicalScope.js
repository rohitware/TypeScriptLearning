// *  alert();    
// *  prompt();   
// to get the information from user....
alert("Hey please enter your Name");
//confirm('Do you really want to do this?') ;
var num1 = Number(prompt('Please enter first number'));
var num2 = Number(prompt('Please enter second number'));
console.log(num1 + num2);
parseInt('32px'); // 32 
Number('32dny'); //
// ======================= Lexical Scope.....
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.growOld = function () {
            _this._age++;
        };
        this._age = age;
    }
    Person.prototype.age = function () {
        return this._age;
    };
    return Person;
}());
var objPerson1 = new Person(0); // object 
//objPerson1.growOld();
var growOldss = objPerson1.growOld; // 
growOldss();
console.log('age', objPerson1.age());
