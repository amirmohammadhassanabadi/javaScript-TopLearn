var prev = document.getElementById("prev");
var next = document.getElementById("next");
prev.onclick = function () {
    window.history.back();
}
next.addEventListener("click", function () {
    window.history.forward();
})
// -----------------------------------------------------------------------------
if (confirm("Are you older than 18?")) {
    alert("Wellcome");
} else {
    alert("You are not allowed");
}