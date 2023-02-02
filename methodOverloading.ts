// function / method overloading same name with diif parametres or arguments

function doubleMe(x: number);
function doubleMe(x: string);
function doubleMe(x: string[]);

function doubleMe(x: any) {
    if (x && typeof x === 'number') {
        console.log(x * 2);
    }
    else if (x === 'string') {
        console.log(x + " " + x)
    }
    else if (Array.isArray(x)) { // ["a"]
        return x.map(name => console.log(name))
    }
}
doubleMe(2); // o/p 4
doubleMe('Jack') // jack jack
doubleMe(["a"]) //
            // &&