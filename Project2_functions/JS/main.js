// This function uses += to concatenate text and display it in an HTML element
function displayMessage() {
    
    var part1 = "Hello";
    var part2 = " World!";
    
   
    part1 += part2; 
    

    document.getElementById("output").innerHTML = part1;
}
