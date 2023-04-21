let wrapper = document.getElementById("wrapper");
let Car = {
    Brand: "Ferrari",
    Model: "Roma",
    Price: "350,000$",
    PrintInfo: function () {
        console.log(this.Brand + " " + this.Model + ` is ${this.Price}`);
        return `${this.Brand} ${this.Model} is ${this.Price}`
    }
}

wrapper.innerHTML = Car.PrintInfo()