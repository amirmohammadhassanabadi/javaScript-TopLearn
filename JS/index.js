let ul = document.querySelector("ul");
let item3 = document.querySelectorAll("li")[2];
let newItem = document.createElement("li");
newItem.innerHTML = "Sake";
ul.replaceChild(newItem, item3);