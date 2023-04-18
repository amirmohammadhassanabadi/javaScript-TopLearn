var container = document.getElementById("container");
var head1 = document.getElementById("head-1");
var NewH1 = document.createElement("h2");
var innerTXT = document.createTextNode("It's a replaced text");
NewH1.appendChild(innerTXT);
container.replaceChild(NewH1, head1);
var head2 = document.getElementById("head-2");
container.removeChild(head2);