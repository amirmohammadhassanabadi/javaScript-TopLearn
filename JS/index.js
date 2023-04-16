var x = 30;
var y = 30;

var inhtml = document.getElementById("resault");
inhtml.innerHTML = x + y;

var z = "17";
var t = "3";
z = Number(z);
t = Number(t);
inhtml.innerHTML = z + t;
z = parseInt(z);
t = parseInt(t);
inhtml.innerHTML = z + t;

function tst() {
    var x = 100;
    var y = 200;
    return x + y;
}
document.write(tst());

function test(x, y, z) {
    alert(x + y * z);
}

test(20 , 5 , 10);

var me = {
    name : "amirmohammad" ,
    family: "hasanabadi" ,
    age: 21,
    isMan: true,
    fullname: function(){
        return "Your Fullname is " + me.name +" " +  this.family;
    }
}
alert(me.fullname());