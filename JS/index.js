var username = prompt("please tell us your name");
var head = document.querySelector("h2");
head.textContent = "you entered your name successfully";
if(username == ""){
    head.textContent = "try again";
}
if(username == " "){
    head.textContent = "try again";
}
if(username = null){
    head.textContent = "try again";
}