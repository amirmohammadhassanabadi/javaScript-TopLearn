let Btn = document.getElementById("btn");
Btn.addEventListener("mouseover", hover);
function hover() {
    Btn.style.backgroundColor = "black";
    Btn.style.color = "dodgerblue";
    Btn.style.border = "0";
}
Btn.addEventListener("mouseout", BtnOut);
function BtnOut() {
    Btn.style.backgroundColor = "dodgerblue";
    Btn.style.color = "black";
    Btn.style.border = "0";
}
Btn.addEventListener("click", BtnClick);
function BtnClick() {
    Btn.style.backgroundColor = "salmon";
    Btn.style.color = "white";
    Btn.style.border = "0";
}