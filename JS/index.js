document.getElementById("Demo-1").innerHTML = Math.random();
function resize1() {
    document.getElementById("Demo-2").innerHTML = window.innerWidth;
}
window.addEventListener("resize", resize1);
function resize2() {
    document.getElementById("Demo-3").innerHTML = window.innerHeight;
}
window.addEventListener("resize", resize2);