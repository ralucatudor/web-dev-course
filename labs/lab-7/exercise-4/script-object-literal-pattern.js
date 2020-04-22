var sessionExpired = setTimeout(function(){
    alert("Sesiune expirata");
}, 30*1000);

var dog = {

    movePixels: 10, // number of pixels
    delayMs: 50,    // number of miliseconds
    dogTimer: null,

    dogWalk: function() {
        var img = document.getElementsByTagName("img")[0];
        var currentLeft = parseInt(img.style.left);
        img.style.left = currentLeft + dog.movePixels + "px";
        // reset image position to start
        if (currentLeft > window.innerWidth - img.width) {
            img.style.left = "0px";
        }
        document.getElementById("info").innerText = "Speed: "+((1000 * dog.movePixels) / dog.delayMs)+"px/s";
    },

    // Call dogWalk function every 50 ms
    startDogWalk: function() {
        clearInterval(this.dogTimer);
        clearTimeout(sessionExpired);
        this.dogTimer = window.setInterval(this.dogWalk, this.delayMs);
        document.getElementById("start-button").disabled = true;
    },

    stopDogWalk: function() {
        clearTimeout(sessionExpired);
        clearInterval(this.dogTimer);
        document.getElementById("start-button").disabled = false;
    },

    goFaster: function() {
        clearTimeout(sessionExpired);
        this.movePixels += 10;
        this.startDogWalk();
    },

    resetSpeed: function() {
        clearTimeout(sessionExpired);
        this.movePixels = 10;
        this.startDogWalk();
    }
};

document.getElementById("start-button").addEventListener("click", function(){
    dog.movePixels = 10;
    dog.startDogWalk();        
});

document.getElementById("stop-button").addEventListener("click", function(){
    dog.stopDogWalk();
});

document.getElementById("speed-button").addEventListener("click", function(){
    dog.goFaster();
});

var newButton = document.createElement("BUTTON"); 
newButton.textContent = "Reset speed";        
newButton.id = "reset-button";
//or newButton.setAttribute('id', 'reset-button');
document.getElementById('buttons').appendChild(newButton); 

document.getElementById("reset-button").addEventListener("click", function(){
    dog.resetSpeed();
});
