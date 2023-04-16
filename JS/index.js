for(var i = 0; i<=10; i++){
    document.write(i + "<br>");
    if(i===7){
        break;
    }
}

document.write("<hr>")

for(var i = 0; i<=10; i++){
    if(i===7){
        break;
    }
    document.write(i + "<br>");
}

document.write("<hr>")

for(var i = 0; i<=10; i++){
    if(i===7){
        continue;
    }
    document.write(i + "<br>");
}

document.write("<hr>")

for(var i = 0; i<=10; i++){
    document.write(i + "<br>");
    if(i===7){
        continue;
    }
}