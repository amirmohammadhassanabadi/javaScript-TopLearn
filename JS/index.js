let head = document.getElementById("head");
var Name1 = head.getAttribute("name");
alert(Name1);
head.style.color = "white";
head.style.backgroundColor = "salmon"
var newli = document.createElement("li");
var newli2 = document.createElement("li");
newli.innerHTML = "Sake";
newli.innerHTML = "Raki";

let ul = document.querySelector("ul");
ul.appendChild(newli);
var item2 = document.querySelectorAll("li")[1];
ul.removeChild(item2);