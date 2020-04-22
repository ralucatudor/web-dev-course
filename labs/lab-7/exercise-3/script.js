var sessionExpired = setTimeout(function(){
    alert("Sesiune expirata");
}, 30*1000);

var movePixels = 0; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;

function printSpeed() {
    var tag = document.getElementById("info");
    tag.textContent = `Speed: ${(1000 * movePixels) / delayMs}px/s`; // or tag.innerHTML = result;
}

// Move the image on screen with 10px
function dogWalk() {
    var img = document.getElementsByTagName("img")[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + movePixels + "px";
    // reset image position to start
    if (currentLeft > window.innerWidth - img.width) {
        img.style.left = "0px";
    }
    printSpeed();
}
      
// Call dogWalk function every 50 ms
function startDogWalk() {
    clearInterval(dogTimer);
    clearTimeout(sessionExpired);
    dogTimer = window.setInterval(dogWalk, delayMs);
    document.getElementById("start-button").disabled = true;
}

function stopDogWalk(){
    clearTimeout(sessionExpired);
    clearInterval(dogTimer);
    document.getElementById("start-button").disabled = false;
}

function goFaster(){
    clearTimeout(sessionExpired);
    movePixels += 10;
    startDogWalk();
}

function resetSpeed(){
    clearTimeout(sessionExpired);
    movePixels = 10;
    startDogWalk();
}

document.getElementById("start-button").addEventListener("click", function(){
    movePixels = 10;
    startDogWalk();        
});

document.getElementById("stop-button").addEventListener("click", function(){
    stopDogWalk();
});

document.getElementById("speed-button").addEventListener("click", function(){
    goFaster();
});

var newButton = document.createElement("BUTTON"); 
newButton.textContent = "Reset speed";        
newButton.id = "reset-button";
//or newButton.setAttribute('id', 'reset-button');
document.getElementById('buttons').appendChild(newButton); 

document.getElementById("reset-button").addEventListener("click", function(){
    resetSpeed();
});
