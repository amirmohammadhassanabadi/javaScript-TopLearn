function goback() {
    window.history.back();
}

function goforward() {
    window.history.forward();
}

function popup() {
    var txt = "";
    var name = prompt("please enter your name", "Default Value");
    if (name == "" || name == null || name == "Default Value") {
        txt = "Name is not acceptable";
    } else {
        txt = "Wellcome dear " + name;
    }
    document.getElementById("h3").innerHTML = txt
}