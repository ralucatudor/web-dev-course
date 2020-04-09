// Input
var blackFridayCart = {
    telefon: "350",
    consola: "250",
    televizor: "450",
    iepurasPlus: "10.60",
    cercei: "20.34",
    geanta: "22.36"
};

function getCartValue(cart) {
    var sum = 0;
    prices = Object.values(cart);
    for (var i = 0; i < prices.length; i++) {
        sum = sum + parseFloat(prices[i]);
    }
    console.log('The cart value is ', sum.toFixed(2));
}

// Output
getCartValue(blackFridayCart); // 1103.3

