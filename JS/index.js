let password = "Abcd1234"
let guess;
let counter = 0;
let error = false;
while (password != guess && error == false) {
    if (counter < 3) {
        guess = prompt("Please enter your password");
        counter++;
        if (password == guess) {
            alert("you entered successfully")
        }
    } else {
        alert("You're not allowed to enter for 2 hours");
        error = true;
    }
}