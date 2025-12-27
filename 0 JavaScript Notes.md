## 1. Variable Declarations & Scope

### `var`

* Function-scoped
* Attached to the global `window` object (in browsers)

```js
var x = 10;
console.log(window.x); // 10
```

### Variable Scopes

* **Global Scope**
* **Block Scope** (`let`, `const`)
* **Function Scope** (`var`)

---

## 2. Temporal Dead Zone (TDZ)

* Applies to `let` and `const`
* Variables exist but cannot be accessed before declaration

```js
console.log(a); // ReferenceError
let a = 10;
```

---

## 3. Type Coercion

JavaScript automatically converts data types when needed.

```js
13 == "13"   // true  (type coercion)
13 === "13"  // false (strict comparison)
```

---

## 4. `NaN` Behavior

```js
NaN === NaN        // false
isNaN(NaN)         // true
```

---

## 5. `process.stdout.write` (Node.js)

```js
process.stdout.write("Hello ");
process.stdout.write("World");
```

---

## 6. Promises

```js
let a = 10, b = 20;

let waitingForDataToUpdate = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        success ? resolve(30) : reject("Update Failed");
    }, 2000);
});

waitingForDataToUpdate
    .then(data => console.log(a + (b = data)))
    .catch(err => console.log(err));
```

---

## 7. Event Loop Execution Order

```js
console.log("First Statement");                    // 1

setTimeout(() => {
    console.log("Second Statement");
}, 2000);                                          // 4

setTimeout(() => {
    console.log("Third Statement");
}, 0);                                             // 3

console.log("Forth Statement");                     // 2
```

**Output Order**

1. First Statement
2. Forth Statement
3. Third Statement
4. Second Statement

---

## 8. Function Concepts

* Pure Function
* Impure Function
* Closure
* Lexical Scoping
* Temporal Dead Zone

---

## 9. Array Methods

### `forEach`

```js
arr.forEach(function(val) {
    console.log(val + 10);
});
```

### `map`

```js
let doubled = numbers.map(function(num) {
    return num * 2;
});

let squared = numbers.map(num => num * num);
```

### `filter`

```js
let filteredArray = array.filter(function(element) {
    return true; // or false
});

let evens = numbers.filter(num => num % 2 === 0); // [2, 4, 6]
```

### `reduce`

```js
let sum = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

let product = numbers.reduce((acc, curr) => acc * curr, 1);

let flat = arrays.reduce((acc, arr) => acc.concat(arr), []);
```

---

## 10. IIFE (Immediately Invoked Function Expression)

```js
(function () {
    console.log("IIFE");
})();
```

---

## 11. Destructuring & Spread Operator

```js
let arr = [1, 2, 3, 4, 5];

let [a, b, , c] = arr;   // a=1, b=2, c=4
let arr2 = [...arr];    // Spread Operator
```

---

## 12. `some` & `every`

```js
let answer = arr.some(function(val) {
    return val < 35;
});

arr.every(function(val) {
    return val % 2 === 0;
});
```

---

## 13. Object Destructuring (Special Keys)

```js
const user = { "first-name": "Riyaz" };
let { "first-name": firstName } = user;
```

---

## 14. `Object.entries`

```js
Object.entries(course).forEach(function(val) {
    console.log(val[0] + " : " + val[1]);
});
```

---

## 15. Currying

```js
const addNumber = a => b => a + b;
console.log(addNumber(3)(4)); // 7
```

---

## 16. Fetch API (Async/Await)

```js
async function fetchData() {
    let response = await fetch("https://api.github.com/users/nykz");

    if (!response.ok) {
        throw new Error(`HTTP Error Status : ${response.status}`);
    }

    const userData = await response.json();
    return userData;
}
```

---

## 17. DOM Selection

```js
document.getElementById('name');
document.getElementsByClassName('colorBox');
document.getElementsByTagName('h1');
document.querySelector('.container #special');
document.querySelectorAll('.container #special');
```

---

## 18. Event Handling

```js
const button = document.getElementById('myButton');

button.addEventListener('click', (event) => {
    alert("Button clicked");
});
```

**Mouse Events**

* `mousedown`
* `mouseover`

---

## 19. FormData API

```js
const formData = new FormData(formElement);
console.log("UserName :: ", formData.get('username'));
```

---

## 20. Input Event

```js
inputfield.addEventListener('input', () => {
    console.log(inputfield.value);
});
```

---

## 21. ES Modules

```js
export const greet = () => console.log("Hello");
```

```js
import { greet } from "/features.js";
```

---

## 22. Symbols

```js
const ID = Symbol('id');
```

---

## 23. Exponent Operator

```js
2 ** 3; // 8
```

---

## 24. `includes`

```js
[1, 2, 3, 4, 5].includes(2); // true
```

---

## 25. Object Utility Methods

```js
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
```

---

## 26. Array `flat`

```js
nestedArray.flat(2);
```

---

## 27. Optional Chaining

```js
user?.name;
```

---

## 28. Logical OR vs Nullish Coalescing

```js
const value = data || 50;   // falsy check
const value2 = data ?? 50; // null or undefined only
```

---

## 29. Web Storage APIs

### Local Storage

```js
localStorage.setItem('username', "Riyaz");
localStorage.getItem('username');
localStorage.removeItem('username');
localStorage.clear();
```

### Session Storage

```js
sessionStorage.setItem('username', "Riyaz");
sessionStorage.getItem('username');
sessionStorage.removeItem('username');
sessionStorage.clear();
```

---

## 30. Creating Elements Dynamically

```js
const button = document.createElement('button');
button.textContent = "Click Me";

button.addEventListener('click', () => alert("Button Clicked"));

document.body.appendChild(button);
```

---

## 31. Execution Types

* **Synchronous**
* **Promise-based**
* **setTimeout / Async**

```text
sync → promise → setTimeout
```