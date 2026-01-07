## 1. Debugging Using Console

The **console** is the simplest and most commonly used debugging mechanism in JS. Browsers and Node.js both provide a built-in console object with multiple methods.

### Purpose

* To inspect variable values
* To track program flow
* To log errors and warnings
* To measure performance

### Important Console Methods

| Method                                   | Use Case                               |
| ---------------------------------------- | -------------------------------------- |
| `console.log()`                          | General information output             |
| `console.error()`                        | Display runtime errors                 |
| `console.warn()`                         | Show warnings                          |
| `console.table()`                        | View array/object data in tabular form |
| `console.time()` / `console.timeEnd()`   | Measure execution time                 |
| `console.group()` / `console.groupEnd()` | Organize logs                          |
| `console.clear()`                        | Remove previous logs                   |
| `console.trace()`                        | Print call stack                       |

---

### Basic Example

```js
const user = { name: "Riyaz", role: "Developer", age: 25 };

console.log("User Data:", user);
console.table(user);
```

### Tracking Code Flow

```js
function stepOne() {
  console.log("Entered Step One");
  return 10;
}

function stepTwo(val) {
  console.log("Entered Step Two with value:", val);
  return val + 20;
}

const result = stepTwo(stepOne());
console.log("Final Result:", result);
```

---

### Measuring Performance

```js
console.time("loopTest");

for (let i = 0; i < 100000; i++) {}

console.timeEnd("loopTest");
```

This prints the exact time taken by the loop.

---

### Advantages of Console Debugging

* No special setup required
* Works in any environment
* Quick to use
* Helpful for small scripts

### Limitations

* Cannot pause execution
* Does not provide line-by-line inspection
* Logs must be manually inserted

---

## 2. Debugger Statement – JavaScript Debugging

JavaScript includes a reserved keyword called **`debugger`** that integrates directly with developer tools.

### What It Does

* Pauses program execution
* Opens the debugging environment
* Allows inspection of current scope
* Works like a manual breakpoint

---

### Syntax

```js
debugger;
```

When the JS engine encounters this line and dev tools are open, execution stops at that point.

---

### Example

```js
function calculate(a, b) {
  debugger;        // execution pauses here
  const sum = a + b;
  return sum;
}

calculate(5, 10);
```

### How to Use

1. Open Browser Developer Tools (F12 / Inspect)
2. Go to Sources tab
3. Run the script containing `debugger`
4. The browser halts exactly at that line
5. You can now:

   * Hover over variables
   * Check Call Stack
   * Step through code

---

### Benefits

* Real-time inspection
* No need to guess with logs
* Can analyze closures, this context, and DOM values

### Common Uses

* Debugging complex functions
* Finding logical errors
* Inspecting loops and conditions

---

## 3. Browser Developer Tools – Debugging

Modern browsers provide powerful graphical debugging utilities collectively called **Developer Tools**.

### Main Debugging Features

* Breakpoints
* Step execution
* Watch expressions
* Scope inspection
* Network debugging
* Error stack traces
* Performance profiling

---

### Key Tabs Used for Debugging

### (a) Console Tab

* Displays logs
* Shows JS errors
* Allows direct command execution

### (b) Sources Tab

This is the primary tab for JavaScript debugging.

#### Breakpoints

Breakpoints allow pausing code at a specific line **without using the debugger statement**.

##### How to Add Breakpoints

1. Open Dev Tools → Sources
2. Locate your JS file
3. Click on the line number
4. Refresh or trigger the code

---

### (c) Network Tab

Used to debug:

* API calls
* Request headers
* Responses
* HTTP errors (404, 500, etc.)

Example:

* If frontend is not receiving proper data, Network tab helps verify whether the problem is in the server or client.

---

### (d) Elements Tab

Used for debugging DOM-related issues.

You can inspect:

* Current HTML structure
* CSS styles
* Attributes
* Event listeners

---

## Step-By-Step Execution Controls

In the Sources tab, the browser provides execution control buttons:

| Control   | Meaning                               |
| --------- | ------------------------------------- |
| Step Over | Execute current line and move to next |
| Step Into | Enter the function call               |
| Step Out  | Exit current function                 |
| Resume    | Continue execution                    |
| Pause     | Manually pause anytime                |

These controls enable **line-by-line debugging**.

---

## Watch Expressions

The **Watch** panel lets you monitor specific variables or expressions while stepping through code.

Example:

```js
a + b
user.name
this
```

The browser continuously updates these values as the program runs.

---

## Call Stack Inspection

When execution is paused, the Call Stack panel shows:

* Which functions were called
* In what order
* From which lines

This is essential for debugging:

* Recursive functions
* Nested callbacks
* Promise chains

---

## Practical Debugging Workflow

A professional JavaScript debugging process generally follows this order:

1. Observe error in Console tab
2. Identify file and line from stack trace
3. Open that file in Sources tab
4. Add breakpoint near the issue
5. Step through execution
6. Inspect variable values
7. Modify logic and retest

---

## Debugging in Node.js vs Browser

* In browsers → use Chrome/Edge Dev Tools
* In Node.js → use:

  * `console` methods
  * Node inspector
  * VS Code debugger

Example Node command:

```bash
node inspect index.js
```

VS Code provides a graphical debugger similar to browser tools.

---

# Summary of the Section

* `console` methods provide quick inspection
* `debugger` statement gives manual execution pause
* Browser Developer Tools offer advanced breakpoints and scope analysis
* Effective debugging requires combining console logs with proper breakpoint debugging
