var myImage = document.querySelector("img");
document.querySelector("button").onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc == "img/1.jpg"){
        myImage.setAttribute("src","img/2.jpg");
    }
    if(mySrc == "img/2.jpg"){
        myImage.setAttribute('src','img/3.jpg');
    }
    if(mySrc == "img/3.jpg"){
        myImage.setAttribute('src','img/1.jpg');
    }
}