let myFun = function () {
    console.log("Button Clicked.....");
}

let myBtn = document.getElementById('myBtn');

myBtn.addEventListener("click", myFun, { once: true });
// myBtn.addEventListener("click", myFun);
console.clear();