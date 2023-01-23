var sn: string | number;
sn = "codemind";
sn = 100;
function formatCommandLine(input: string | string[]) {
    let line = "";
    if (typeof input === "string") {
        line = input.trim();
    } else {
        line = input.map((x) => x.trim()).join(" ");
    }
    return line;
}
console.log(formatCommandLine("hello ")); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
//console.log(formatCommandLine(123457));



class Person1 {

    // parameterised constructor .
    constructor(public fname: string, public age: number) {
    }
}
const jack = new Person1('Jack', 30);
console.log(jack.fname, jack.age);                                                                                                                                                                                                                                          ^