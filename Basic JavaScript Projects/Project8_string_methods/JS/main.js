function useConcat() {
    let part1 = "Learning ";
    let part2 = "JavaScript ";
    let part3 = "is fun!";
    let result = part1.concat(part2, part3);
    document.getElementById("concatResult").innerHTML = result;
}


function useSlice() {
    let sentence = "JavaScript is powerful.";
    let sliced = sentence.slice(0, 10); // extracts "JavaScript"
    document.getElementById("sliceResult").innerHTML = sliced;
}


function useToString() {
    let num = 123;
    let str = num.toString();
    document.getElementById("toStringResult").innerHTML = str;
}


function useToPrecision() {
    let pi = 3.14159265359;
    let precise = pi.toPrecision(4); // "3.142"
    document.getElementById("toPrecisionResult").innerHTML = precise;
}
