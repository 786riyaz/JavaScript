// console.clear()
console.log("Application Started...")
debugger;
let body = document.getElementById("body")
console.log(body);

body.onafterprint(function(){
    debugger;
    console.log("Body...")
})

onAfterPrint = function () {
    debugger;
    console.log("Body on after print")
}

window.addEventListener("afterprint", (event) => {
    debugger;
    console.log("After print");
});

window.onafterprint = (event) => {
    debugger;
    console.log("After print");
};

//Remaining