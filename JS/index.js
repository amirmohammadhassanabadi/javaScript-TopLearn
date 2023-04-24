var open1 = document.getElementById("open");
var close1 = document.getElementById("close");
var assign1 = document.getElementById("assign");
var reload1 = document.getElementById("reload");
let myWindow;
open1.onclick = function () {
    myWindow = window.open("https://www.bmwusa.com/");
}
close1.onclick = function () {
    myWindow.close();
}
assign1.addEventListener("click", function () {
    window.location.assign("https://www.bmwusa.com/");
});
reload1.onclick = function () {
    window.location.reload();
}