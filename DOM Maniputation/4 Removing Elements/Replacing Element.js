/*
removeChild - 
*/

const listElement = document.getElementById('myList');
const removeItemBtn = document.getElementById('removeItemBtn');
console.log(listElement);

removeItemBtn.addEventListener('click', () => {
    console.log("Inside the remove function.....");
    const lastItem1 = listElement.lastChild;
    console.log("Last Element 1 :: ", lastItem1);
    listElement.removeChild(lastItem1);
    const lastItem2 = listElement.lastChild;
    console.log("Last Element 2 :: ", lastItem2);
    listElement.removeChild(lastItem2);
    console.log("Last Element Removed");
})