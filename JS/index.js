var myWidth = window.innerWidth;
var myHeight = window.innerHeight;
var myWidth2 = document.documentElement.clientWidth;
var myHeight2 = document.documentElement.clientHeight;
var myWidth3 = document.body.clientWidth;
var myHeight3 = document.body.clientHeight;

document.getElementById("head-1").innerHTML = "<span class='text-secondary'>window.innerWidth: </span>" + myWidth + " <span class='text-warning'>px</span>";
document.getElementById("head-2").innerHTML = "<span class='text-secondary'>window.innerHeight: </span>" + myHeight + " <span class='text-warning'>px</span>";

document.getElementById("head-3").innerHTML = "<span class='text-secondary'>document.documentElement.clientWidth: </span>" + myWidth2 + " <span class='text-warning'>px</span>";
document.getElementById("head-4").innerHTML = "<span class='text-secondary'>document.documentElement.clientHeight: </span>" + myHeight2 + " <span class='text-warning'>px</span>";

document.getElementById("head-5").innerHTML = "<span class='text-secondary'>document.body.clientWidth: </span>" + myWidth3 + " <span class='text-warning'>px</span>";
document.getElementById("head-6").innerHTML = "<span class='text-secondary'>document.body.clientHeight: </span>" + myHeight3 + " <span class='text-warning'>px</span>";

document.getElementById("head-7").innerHTML = "<span class='text-secondary'>window.location.href: </span>" + `<span class='text-warning'>${window.location.href}</span>`;
document.getElementById("head-8").innerHTML = "<span class='text-secondary'>window.location.protocol: </span>" + `<span class='text-warning'>${window.location.protocol}</span>`;