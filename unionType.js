var sn;
sn = "codemind";
sn = 100;
function formatCommandLine(input) {
    var line = "";
    if (typeof input === "string") {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(" ");
    }
    return line;
}
console.log(formatCommandLine("hello ")); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
//console.log(formatCommandLine(123457));
