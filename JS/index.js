function x(a, b) {
    return a + b;
}
console.log(x(20, 30));

var y = function (a, b) {
    return a + b;
}
console.log(y(10, 30));

var z = new Function("a", "b", "return a+b");
console.log(z(6, 7));

(function () {
    document.write("Functoin 2");
})();
// -------------------------------
// 5)
// var x = (a, b) => a * b;
// function x(a, b) {
//     return a * b;
// }
// alert(x(5, 8));