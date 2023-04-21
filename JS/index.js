let image = document.getElementById("image");
image.addEventListener("mouseover", mOver);
function mOver() {
    image.style.border = "2px solid black";
}
image.addEventListener("mouseout", mOut);
function mOut() {
    image.style.border = "2px solid gray";
}