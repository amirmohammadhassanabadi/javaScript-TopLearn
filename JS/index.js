var Txt = document.getElementById("p2");
console.log(Txt.nextSibling.nextSibling.innerHTML);
console.log(Txt.nextElementSibling.innerHTML);
console.log(Txt.previousElementSibling.innerHTML);

var Container = document.getElementById("container");
console.log(Container.firstElementChild.innerHTML);
console.log(Container.firstChild.innerHTML);
console.log(Container.childNodes[0].innerHTML);