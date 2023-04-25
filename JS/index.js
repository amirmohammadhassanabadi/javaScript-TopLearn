function myFunc() {
    var car = "BMW i8";
}
// console.log(car);
action();
console.log(carName);
function action() {
    carName = "Range Rover";
}
action();
console.log(carName);

// Hoising
x = 234;
let p = document.getElementById("p1");
p.innerHTML = x;
var x;