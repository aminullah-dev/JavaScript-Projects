function runWhileLoop() {
    let result = "";
    let i = 1;
    while (i <= 5) {
        result += "Count: " + i + "<br>";
        i++;
    }
    document.getElementById("whileLoop").innerHTML = result;
}

function runForLoop() {
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += "Number: " + (i + 1) + "<br>";
    }
    document.getElementById("forLoop").innerHTML = result;
}

function showArray() {
    let fruits = ["Apple", "Banana", "Cherry", "Date"];
    let output = "Fruits: " + fruits.join(", ");
    document.getElementById("arrayResult").innerHTML = output;
}

function showObject() {
    let book = {
        title: "JavaScript Basics",
        author: "A. Developer",
        year: 2025
    };
    let text = "Book: " + book.title + " by " + book.author + " (" + book.year + ")";
    document.getElementById("objectInfo").innerHTML = text;
}
