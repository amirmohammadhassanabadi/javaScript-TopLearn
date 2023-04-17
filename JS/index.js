// (function () {
//     var animation = setInterval(move, 3000)
//     function move() {
//         document.getElementById("num-1").src = "./img/image-2.jpg"
//         clearInterval(animation);
//     }
// })();

(function () {
    var animation = setInterval(show, 4000);
    function show() {
        document.getElementById("num-1").src = "./img/image-2.jpg";
        clearInterval(animation);
    }
})();