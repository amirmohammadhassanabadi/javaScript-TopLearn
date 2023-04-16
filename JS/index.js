function x(a, b) {
    if (a === undefined) {
        a = 1;
    }
    if (b === undefined) {
        b = 2;
    }
    return a + b;
}
console.log(x());

function y(a = 1, b = 2) {
    return a + b;
}
console.log(y(5));

function z() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};
z("amir", "mina", "reza");

function k() {
    function m(a, b) {
        return a + b;
    };
    console.log(m(3,6));
}
k();