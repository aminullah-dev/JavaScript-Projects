function checkHeight() {
    var Height = document.getElementById("Height").value;
    var message = (Height >= 150) ? "You are tall enough" : "You are too short";
    document.getElementById("Ride").innerHTML = message + " to ride.";
}

function Car(Make, Model, Year, Color) {
    this.Make = Make;
    this.Model = Model;
    this.Year = Year;
    this.Color = Color;
}

var myCar = new Car("Tesla", "Model 3", 2023, "White");

function displayCar() {
    document.getElementById("New_and_This").innerHTML =
        "I drive a " + myCar.Color + " " + myCar.Year + " " + myCar.Make + " " + myCar.Model + ".";
}

function nestedCount() {
    document.getElementById("Nested_Function").innerHTML = doCount();
    function doCount() {
        var start = 5;
        function increment() { start += 1; }
        increment();
        return start;
    }
}
