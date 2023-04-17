var x = document.getElementById("btn");
x.addEventListener("click", clickchecker1);
x.addEventListener("click", clickchecker2);
x.addEventListener("click", clickchecker3);
function clickchecker1() {
    alert("You clicked once");
}
function clickchecker2() {
    alert("Second click");
}
function clickchecker3() {
    alert("Third click");
}