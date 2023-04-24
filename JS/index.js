let text2 = document.getElementById("text");
text2.innerHTML = "w = " + screen.width + " , h = " + screen.height;

window.onresize = function () {
    let text = document.getElementById("Demo");
    let Width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let Height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    text.textContent = "Width is: " + Width + " , Height is: " + Height;
}