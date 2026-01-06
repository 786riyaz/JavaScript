let a = (1,2,3)
console.log(a)                  // 3
console.log(1,2,3)              // 1 2 3
console.log(true && false)      // false
console.log(false && true)      // false

console.log(null)               // null
console.log(undefined)         // undefined
console.log(1 || 0)              // 1
console.log(0 || 1)              // 1
console.log(false || true)      // true
console.log(true || false)      // true

console.log(!true)              // false
console.log(!false)             // true

console.log(!!true)             // true
console.log(!!false)            // false

console.log(!!null)             // false
console.log(!!undefined)        // false    

console.log(!!1)                // true
console.log(!!0)                // false

console.log(!!"hello")          // true
console.log(!!"")               // false

console.log(!![])               // true
console.log(!!{})               // true

console.log(!!NaN)              // false
console.log(!!Infinity)         // true
console.log(!!-Infinity)        // true
console.log(!!-1)               // true
console.log(!!42)               // true

console.log(!!function(){})     // true
console.log(!!Symbol())         // true

console.log(!!BigInt(0))       // false
console.log(!!BigInt(123))     // true

console.log(!!new Boolean(false)) // true
console.log(!!new Number(0))     // true
console.log(!!new String(""))     // true
console.log(!!new Date())        // true
console.log(!!/regex/)          // true
console.log(!!new Map())       // true
console.log(!!new Set())       // true
console.log(!!new WeakMap())   // true
console.log(!!new WeakSet())   // true

console.log(!!arguments)        // true (inside a function)
// console.log(!!document)         // true (in browser environment)
// console.log(!!window)           // true (in browser environment)
console.log(!!global)           // true (in Node.js environment)
console.log(!!process)          // true (in Node.js environment)
console.log(!!module)           // true (in Node.js environment)
console.log(!!require)          // true (in Node.js environment)
console.log(!!__dirname)        // true (in Node.js environment)
console.log(!!__filename)       // true (in Node.js environment)

console.log(!!BigInt)          // true
console.log(!!Symbol)          // true

console.log(null || "default")      // "default"
console.log(undefined || "default") // "default"
console.log("value" || "default")  // "value"
console.log(0 && "value")          // 0
console.log(1 && "value")          // "value"
console.log("" && "value")         // ""
console.log("non-empty" && "value") // "value"  
console.log("============================")
console.log((false || "fallback") && (true || "default")) // true
console.log((null && "value") || (undefined && "other"))   // undefined
console.log((0 || "zero") && ("" || "empty"))               // "empty"
console.log((42 && "answer") || (NaN && "not a number"))    // "answer"
console.log("RRR" && null)                  // null
console.log("RRR" || null)                  // "RRR"
