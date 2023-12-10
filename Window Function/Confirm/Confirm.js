// confirm works similar kind of prompt
let result, itemToBeDelete;

let ButtonClicked = function (id) {
    console.log("Detected ID = " + id);
    let detectedNumber = id.split("_")[1];
    if (id.includes("Button")) {
        console.log("Button Detected :: " + detectedNumber);
        result = window.confirm("Are you sure you want to Delete Button :: " + detectedNumber);
        itemToBeDelete = "CellButton" + detectedNumber;
    } else if (id.includes("Row")) {
        console.log("Row Detected :: " + detectedNumber);
        result = window.confirm("Are you sure you want to Delete Row :: " + detectedNumber);
        itemToBeDelete = "Row" + detectedNumber;
    } else if (id.includes("All")) {
        console.log("All Detected :: " + detectedNumber);
        result = window.confirm("Are you sure you want to Delete All :: " + detectedNumber);
        itemToBeDelete = "ButtonTable";
    }

    if(result === true){
        deleteItem(itemToBeDelete);
    }
}

let deleteItem = function (id) {
    console.log("Deleting Item = " + id);
    let element = document.getElementById(id);
    element.remove();
}