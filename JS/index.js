var x = 10
try {
    console.log(x);
}
catch (Error) {
    document.write(Error.message);
}
finally {
    console.log("Contact us");
}

var x = "amir";
try{
    if(x=="amir") throw "Dear User You Are Banned"
}
catch(MyErr){
    document.write("Error ' Cause: " + MyErr );
}
finally{
    console.log("Contact Us");
}