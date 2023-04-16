var Array1 = ["Tom", "Hardy", 37, "English"];
var txt = "";
for(var i = 0; i<Array1.length ; i++){
    txt += Array1[i] + "<br>";
}
document.getElementById("resault").innerHTML = txt;

for (x in Array1) {
  console.log(Array1[x]);
}

var z = 10;

while (z < 20) {
  document.write(z + 10 + "<br>");
  z++;
}

do {
console.log(z);
} while (z > 20);