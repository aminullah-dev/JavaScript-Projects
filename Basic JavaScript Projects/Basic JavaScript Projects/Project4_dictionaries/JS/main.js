
var person = {
    Name: "Amin",
    Age: 25,
    Country: "Afghanistan",
    Language: "Pashto"
};


delete person.Language;


function displayDictionary() {
    document.getElementById("Dictionary").innerHTML = "Language: " + person.Language;
}
