/*
createElement function can be used to create element dynamically
*/

const newItem = document.createElement('div');

// Set contents with textContent
newItem.textContent = "New Item";

// OR set contents with innerHTML
newItem.innerHTML = '<h2> New Item </h2>';