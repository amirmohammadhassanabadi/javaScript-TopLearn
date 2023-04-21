var Questions = [
    {
        prompt: "Where is the capital of Netherlands?\n(a) Rotterdam\n(b) Amsterdam\n(c) Utrecht",
        answer: "b"
    },
    {
        prompt: "Where is the capital of Denmark?\n(a) Copenhagen\n(b) Aarhus\n(c) Aalborg",
        answer: "a"
    },
    {
        prompt: "Which one these cities isn't in South Africa?\n(a) Cape Town\n(b) Johannesburg\n(c) Cairo",
        answer: "c"
    }
]
var score = 0;
for (var i = 0; i < Questions.length; i++) {
    let ask = prompt(Questions[i].prompt);
    if (ask == Questions[i].answer) {
        score++;
        alert("Your answer was right")
    } else {
        alert("Your answer was not right")
    }
}
alert("your score is : " + score + " of " + Questions.length);