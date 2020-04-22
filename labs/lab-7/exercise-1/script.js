function makeStory() {
    var inputName = document.getElementById("person").value;
    var inputPlace = document.getElementById("place").value;
    var inputAdj = document.getElementById("adjective").value;
    var text = document.createTextNode(`${inputName} has visited the ${inputAdj} ${inputPlace}!`);
    var tag = document.getElementById("story");
    tag.appendChild(text);
}

document.getElementById("story-button").addEventListener("click", makeStory);