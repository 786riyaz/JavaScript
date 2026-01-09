/*
replaceChild 
node.replaceChild(newnode, oldnode)
*/

let Replace = function(){
    console.log("Inside the Replace Child Function");
    const newElement = document.createElement('div');
    
    // OR set content with innerHTML
    newElement.innerHTML = '<p>JS</p><p>HTML</p>';
    // debugger;
    
    const OldDiv = document.getElementById('ParentDiv');
    OldDiv.parentElement.replaceChild(newElement, OldDiv);
    // This function will add the element in target element
    console.log("Replace Child function Executed");
}