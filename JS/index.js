var innerInput = document.getElementById("input");
let buttom = document.getElementById("btn");
buttom.addEventListener("click", onPage);
function onPage() {
    let newLi = document.createElement("li");
    newLi.innerHTML = innerInput.value;
    let ul = document.querySelector("ul");
    ul.appendChild(newLi);
    innerInput.value = ""
}