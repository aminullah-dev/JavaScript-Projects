function add() {
    var x = 7 + 5;
    document.getElementById("add").innerHTML = "7 + 5 = " + x;
}

function subtract() {
    var x = 10 - 3;
    document.getElementById("subtract").innerHTML = "10 - 3 = " + x;
}

function multiply() {
    var x = 4 * 6;
    document.getElementById("multiply").innerHTML = "4 * 6 = " + x;
}

function modulus() {
    var x = 15 % 4;
    document.getElementById("modulus").innerHTML = "15 % 4 = " + x;
}

function increment() {
    var x = 9;
    x++;
    document.getElementById("increment").innerHTML = "9 incremented = " + x;
}


function decrement() {
    var x = 9;
    x--;
    document.getElementById("decrement").innerHTML = "9 decremented = " + x;
}

function randomNumber() {
    var x = Math.floor(Math.random() * 101);
    document.getElementById("random").innerHTML = "Random Number: " + x;
}
