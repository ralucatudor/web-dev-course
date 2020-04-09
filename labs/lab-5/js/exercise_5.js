/* A map is a built-in function of Arrays in javascript which helps us iterate
over each individual element of the array and returns a brand new array. */

function multiplicator(element) {
    return 2 * element;
}

Array.prototype.myMap = function(callbackFunction) {
    let newArray = [];
    this.forEach(a => newArray.push(callbackFunction(a)));
    return newArray;
}
/* or
Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index]));
    }
    return resultArray;
}
*/

//[1,2,3].map(multiplicator); // [2,4,6]
//[1,2,3].myMap(multiplicator); // [2,4,6]

arr=[1,2,3]
arr = arr.myMap(multiplicator);

for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
