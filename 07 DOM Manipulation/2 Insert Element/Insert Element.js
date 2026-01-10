/*
Two Technique ::: 
    appendChild - add an element as the last element
    insertBefore - to insert an element before an existing child
*/

let append = function () {
    console.log("Inside the Append Child Function.....");
    const newElement = document.createElement('p');
    newElement.innerHTML = "Water";

    const ParentDiv = document.getElementById('parent');
    ParentDiv.appendChild(newElement);
    console.log("Appended Child function executed ...");
}

let insert = function () {
    console.log("Inside the Insert Before Function.....");
    const newElement = document.createElement('p');
    newElement.innerHTML = "Water";

    const ParentDiv = document.getElementById('parent');

    const referenceItem = ParentDiv.firstChild;
    ParentDiv.insertBefore(newElement, referenceItem);
    // element.insertBefore(new, existing)
    console.log("Insert Before function executed ...");
}