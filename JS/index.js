var prev = document.getElementById("prev");
var next = document.getElementById("next");
prev.onclick = function () {
    window.history.back();
}
next.addEventListener("click", function () {
    window.history.forward();
})
// -----------------------------------------------------------------------------
// if (navigator.cookieEnabled) {
//     alert("it is set");
// } else {
//     alert("it is not set");
// }
// -----------------------------------------------------------------------------
if (confirm("Are you older than 18?")) {
    alert("Wellcome");
} else {
    alert("You are not allowed");
}