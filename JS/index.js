var container = document.getElementById("container");
var head4 = document.createElement("h1");
var TXT = document.createTextNode("Python");
var head2 = document.getElementById("head2");
container.appendChild(head4);
head4.appendChild(TXT);
container.insertBefore(head4, head2);