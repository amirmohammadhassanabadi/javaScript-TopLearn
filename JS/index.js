var change = function(){
    document.getElementById("head").innerHTML = "Hello World"
}
change()
document.getElementById("btn").onclick = function() {
    document.getElementById("head").innerHTML = "Hello User";
    document.getElementById("btn").innerHTML = "You Clicked";
}