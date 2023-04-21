let Friends = ["Emma", "Tom", "Nicole"];
Friends.forEach(Friend);
function Friend(item, index) {
    document.write(index + " : " + item + "<br>");
}

var Books = [
    {
        Title: "Les Miserables",
        Author: "Victor Hugo",
        Pages: 1462
    },
    {
        Title: "Crime and Punishment",
        Author: "Fyodor Dostoevsky",
        Pages: 576
    }
]
Books.forEach(myFunc);
function myFunc(item) {
    document.write("The title of the book is : " + item.Title + "and includes " + item.Pages + " pages " + "and is written by " + item.Author + "<br>");
}