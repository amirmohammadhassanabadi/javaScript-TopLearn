function Multiplication(x,y) {
return x + y;
}
console.log(Multiplication(20,30));
// -----------------------------------------------------
let Division = new Function("a" , "b" , "return a/b");
console.log(Division(100, 5));