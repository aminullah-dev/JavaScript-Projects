var globalMessage = "Hello from the global scope!";

function displayVariables() {
    let localMessage = "Hello from the local scope!";
    console.log(globalMessage);
    console.log(localMessage);
}

function checkTime() {
    let currentHour = new Date().getHours();
    
    if (currentHour < 12) {
        document.getElementById("timeOutput").innerHTML = "Good morning!";
    } else {
        document.getElementById("timeOutput").innerHTML = "Good afternoon!";
    }
}

function triggerDebug() {
    console.log("About to log an undefined variable:");
    console.log(notDefinedVariable);
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12) {
        Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is the afternoon.";
    } else {
        Reply = "It is evening time.";
    }

    document.getElementById("timeOutput").innerHTML = Reply;
}
