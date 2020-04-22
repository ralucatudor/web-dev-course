function square(value) {
    return value * value;
} 

function half(value) {
    return value / 2;
}

function percentage(p, value) {
    return p / 100 * value;
}

function circleArea(R) {
    return Math.PI * square(R);
}

document.getElementById("square-button").addEventListener("click", function(){
    var inputValue = document.getElementById("square-input").value;
    var result = square(inputValue);
    var tag = document.getElementById("solution");
    //tag.appendChild(result.toString()); nu merge - de ce?
    tag.textContent = result; // or tag.innerHTML = result;
});

// document.getElementById("half-button").addEventListener("click", function(){
//     var inputValue = document.getElementById("half-input").value;
//     var result = half(inputValue);
//     var tag = document.getElementById("solution");
//     tag.textContent = result;
// });

// using keypress event so that the user won't have to click the button for the result
document.getElementById("half-input").addEventListener("keypress", function(){
        var inputValue = document.getElementById("half-input").value;
        var result = half(inputValue);
        var tag = document.getElementById("solution");
        tag.textContent = result;
    });

document.getElementById("percent-button").addEventListener("click", function(){
    var x = document.getElementById("percent1-input").value;
    var y = document.getElementById("percent2-input").value;
    var result = percentage(x, y);
    var tag = document.getElementById("solution");
    tag.textContent = result;
});

document.getElementById("area-button").addEventListener("click", function(){
    var inputValue = document.getElementById("area-input").value;
    var result = circleArea(inputValue);
    var tag = document.getElementById("solution");
    tag.textContent = result;
});