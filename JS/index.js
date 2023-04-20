let Num1 = prompt("Please enter number 1");
let Num2 = prompt("Please enter number 2");
document.write(Number(Num1) + Number(Num2));
document.write(parseInt(Num1) + parseInt(Num2));
document.write(parseFloat(Num1) + parseFloat(Num2));

var x = false;
x = String(x);
document.write(typeof x);
let z = "phrase";
z = Number(z);
console.log(typeof (z));
document.write(z);

let y = 10;
y++;
y++;
y++;
y++;
y--;
y += 20;
y -= 3;
y *= 3;
y /= 5;
y %= 3;
console.log(y);

let word1 = "amir";
let word2 = "";
word1 = Boolean(word1);
word2 = Boolean(word2);
console.log(word1);
console.log(word2);