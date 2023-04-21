let buttom = document.getElementById("btn");
buttom.addEventListener("click", Event1);
function Event1() {
    setTimeout(action, 3000);
};
function action() {
    console.log("Hello");
};

var Buttom = document.getElementById("btn");
Buttom.addEventListener("click", myFunc);
function myFunc() {
    setInterval(action, 3000);
};
function action() {
    console.log("Wellcome");
};