//data types
let str = 'Amir';
let number = 84;
let gpa = 65.3;
let bool = true;
let myVar1 = null; //no value at all
let myVar2 = undefined; //no value yet

//document.write()
document.write("<h2 class='text-danger'>This is by JS</h2>");
document.write("<hr class='text-danger'>");

var phrase = "Strings are cool";
console.log(phrase);
console.log(phrase.length);
console.log(phrase.toUpperCase());
console.log(phrase.toLocaleLowerCase());
console.log(phrase.charAt(0));
console.log(phrase.indexOf("o"));
console.log(phrase.lastIndexOf("z"));
console.log(phrase.substring(2,9));//from 2 to 8
console.log(phrase.substring(phrase.indexOf("a"),phrase.length));
console.log(phrase.substring(8,16));
console.log(phrase.endsWith("d"));//false
console.log(phrase.endsWith("cool"));//true
console.log(phrase.includes("cool"));//true
console.log(phrase.includes("z"));//false

//Concatenation
let str1 = "Amir";
let str2=  "mohammad";
document.write(str1 + " " + str2)