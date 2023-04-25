var P = document.createElement("p");
var txt = document.createTextNode("IT'S NEW");
var Container = document.getElementById("container");
P.appendChild(txt);
document.body.appendChild(P);
document.body.insertBefore(P, Container);
document.body.removeChild(Container);
Container.replaceChild(P, Container.firstElementChild);