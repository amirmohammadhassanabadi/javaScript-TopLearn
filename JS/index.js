var MyVar = "v1";
var MyVar = "v2";
var MyObject = {
    MyVar: "v3",
    MyFunc: function(){
        return ("This Function is doing right: " + this.MyVar);
    }
}
console.log(this.MyVar);
console.log(this);
var x = this;
console.log(x);
document.write(this);
// ======================================================
const y = new Array ("amir" , 17);

y.push("Hasanabadi")
console.log(y)
const z = {
    Name: "Amir",
    Age: 21
}
z.Family = "Hasanabadi";
z.Name = "Amirmohammad";
console.log(z);