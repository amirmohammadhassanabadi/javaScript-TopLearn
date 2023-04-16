function Event1() {
    alert("Your Event Worked");
}

function resault(x, y) {
    var Sim = document.getElementById("resault");
    Sim.innerHTML = x + y;
}

var x = 100;
if(x<=20){
    alert("You Choosed the right Number");
}else if(x<=30){
    alert("Not a Bad Choise");
}else if(x<=40){
    alert("It isn't a Very Good Idea");
}else{
    alert("You Choosed the Wrong Number")
}

var x = 20
switch(x){
    case 10: alert("This is Number 10");
    break;
    case 20: alert("This is Number 20");
    break;
    case 30: alert("This is Number 30");
    break;
    case 40: alert("This is Number 40");
    break;
}

document.write(new Date().getDay())
switch(new Date().getDay()){
    case 0: alert("This the 1st day of the week");
    break;
    case 1: alert("This the 2nd day of the week");
    break;
    case 2: alert("This the 3rd day of the week");
    break;
    case 3: alert("This the 4th day of the week");
    break;
    case 4: alert("This the 5th day of the week");
    break;
    case 5: alert("This the 6th day of the week");
    break;
    case 6: alert("This the 7th day of the week");
    break;
}