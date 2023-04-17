function animation() {
    var animator = document.getElementById("myAnimate");
    var start = 0;
    var left = 0;
    var animate = setInterval(go, 5);
    function go() {
        if (start == 450) {
            clearInterval(animate);
        } else {
            start++;
            left++;
            animator.style.top = start;
            animator.style.left = left;
        }
    }
}