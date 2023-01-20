var mathMarks = Number(prompt('Enter Maths Marks'));
console.log("Maths Marks  = ".concat(mathMarks));
var phyMarks = Number(prompt('Enter Physics Marks'));
console.log("Physics Marks = ".concat(phyMarks));
var cheMarks = Number(prompt('Enter Chemistry Marks'));
console.log("Chemistry Marks = ".concat(cheMarks));
var totalMarks = mathMarks + phyMarks + cheMarks;
var totalTofix = totalMarks.toFixed(2);
console.log("Total Marks:", totalTofix);
var averageMarks = totalMarks / 3;
var averageTofix = averageMarks.toFixed(2);
console.log("Average Marks:", averageTofix);
if (averageMarks < 70) {
    console.log("C Grade");
}
else if (averageMarks > 70 && averageMarks < 90) {
    console.log("B Grade");
}
else if (averageMarks > 90 && averageMarks < 100) {
    console.log("A Grade");
}
else {
    console.log("Invalid Data");
}
