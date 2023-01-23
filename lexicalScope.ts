

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