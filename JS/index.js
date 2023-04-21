let Movie = {
    Title: "Outlaw King",
    InitialRelease: "September 6, 2018",
    Director:{
        FullName:"David Mackenzie",
        BirthDay: "May 10, 1966",
        Nationality: "Scottish"
    },
    Duration:"2h 17m",
    Badget: "120 million USD",
    Casts: [{
        FullName:"Chris Pine",
        BirthDay: "August 26, 1980",
        Nationality: "American"
    },
    {
        FullName:"Florence Pugh",
        BirthDay: "January 3, 1996",
        Nationality: "English"
    }]
}
console.log(Movie.Casts[1].FullName);