
// *  alert();    
// *  prompt();   

// to get the information from user....

alert("Hey please enter your Name");


//confirm('Do you really want to do this?') ;

var num1 = Number( prompt('Please enter first number'));

var num2 = Number(prompt('Please enter second number')) ;


console.log(num1 + num2);

parseInt('32px'); // 32 

Number('32dny'); //

// ======================= Lexical Scope.....

class Person {
    private _age: number;
    constructor(age: number) {
        this._age = age;
    }

    growOld = () => {
        this._age ++;
    }

    age() {
        return this._age;
    }
}

const objPerson1 = new Person(0); // object 

//objPerson1.growOld();

const growOldss = objPerson1.growOld; // 

growOldss();
console.log('age', objPerson1.age());