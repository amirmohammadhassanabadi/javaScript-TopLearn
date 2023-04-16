function FormChecker() {
    // var x = document.forms["Myform"]["input1"].value;
    if (document.forms["Myform"]["input1"].value == "") {
        return false
    }
}
function FormChecker() {
    return false;
}

function objectmaker(Name, Family, Age) {
    this.Name = Name;
    this.Family = Family;
    this.Age = Age;
}
var x = new objectmaker("Amir", "Hasanabadi", 17);
console.log(x);
const y = { brand: "BMW", model: "730li", price: "100,000$" }
console.log(y);