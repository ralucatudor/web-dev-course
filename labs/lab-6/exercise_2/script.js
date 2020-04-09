document.body.style.fontFamily = "Arial, sans-serif"

document.getElementById("nickname").textContent = "Donda";
document.getElementById("favorites").textContent = "Coding, Dancing";
document.getElementById("hometown").textContent = "Bucharest";

const list = document.querySelectorAll("UL");

for (item of list) {
    item.classList.add("list-item");
}

var myImage = document.createElement("IMG");

myImage.src = "http://getdrawings.com/images/cartoon-drawing-16.jpg";
// or myImage.setAttribute("src", "http://getdrawings.com/images/cartoon-drawing-16.jpg");
myImage.alt = "Winnie-the-Pooh";
// ormyImage.setAttribute("alt", "Winnie-the-Pooh");
myImage.width = '200';

document.body.appendChild(myImage);

