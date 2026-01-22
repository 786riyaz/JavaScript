### Basics
Question 1 : What is JavaScript?  
Answer :: JavaScript is a high-level, prototype-based, multi-paradigm language used for client-side web interactivity, server-side development with runtimes like Node.js, and tooling, supporting imperative, functional, and object-oriented styles.

Question 2 : Which primitive types exist?  
Answer :: JavaScript has seven primitives-string, number, bigint, boolean, undefined, symbol, and null-each immutable and compared by value, forming the foundation of type operations and coercion rules.

Question 3 : == vs === differences?  
Answer :: The loose equality operator performs type coercion before comparison which can yield surprising truths, while strict equality compares both value and type without coercion for predictable checks.

Question 4 : What is hoisting?  
Answer :: During compilation, declarations are hoisted to the top of their scope; var and function declarations are hoisted (with var initialized to undefined), while let/const are hoisted into the temporal dead zone until initialization.

Question 5 : Purpose of strict mode?  
Answer :: Strict mode opts into safer semantics by disallowing silent errors (e.g., implicit globals), changing certain error types into thrown exceptions, and reserving keywords for future-proofing.

Question 6 : Why typeof null is "object"?  
Answer :: typeof null returns "object" due to an early spec bug in type tagging that was standardized for backward compatibility, making explicit null checks advisable.

Question 7 : What is NaN and how to test it?  
Answer :: NaN signals an invalid numeric computation and is the only value not equal to itself; Number.isNaN provides a non-coercing check while isNaN coerces inputs before testing.

Question 8 : Pass-by-value or reference?  
Answer :: Arguments are passed by value, but for objects that value is the reference, so reassigning the parameter doesn't affect the original while mutating the referenced object does.

### Functions and scope

Question 9 : What is lexical scope?  
Answer :: Variable resolution is based on where functions are written, not called; nested scopes can read outer variables, creating a predictable chain for name lookup at runtime.

Question 10 : Explain closures.  
Answer :: A closure forms when a function retains access to variables from its lexical environment after the outer function returns, enabling data privacy, memoization, and function factories.

Question 11 : IIFE purpose?  
Answer :: An Immediately Invoked Function Expression executes as it's defined to create an isolated scope for variables, historically used to avoid global pollution before block-scoped let/const.

Question 12 : Arrow vs regular functions?  
Answer :: Arrow functions lexically bind this and lack arguments and prototype, making them unsuitable as constructors but ideal for callbacks where this should not rebind.

Question 13 : call, apply, bind usage?  
Answer :: call and apply invoke a function with an explicit this (apply spreads arguments via array-like input), while bind returns a new function with permanently bound this and optional preset arguments.

Question 14 : Currying explained?  
Answer :: Currying transforms a multi-argument function into a chain of single-argument functions, enabling partial application and composability in functional-style code.

Question 15 : Function hoisting nuance?  
Answer :: Function declarations are hoisted with their definitions, so they can be invoked before their appearance, while function expressions follow variable initialization rules.

### Objects and prototypes
Question 16 : Prototypal inheritance?  
Answer :: Each object has an internal [[Prototype]] link used to delegate property and method lookups up the chain until found or the chain ends at null.

Question 17 : prototype vs proto?  
Answer :: prototype is a property on constructor functions that sets instances' [[Prototype]], while proto is an accessor to an object's actual [[Prototype]] mainly for introspection and legacy usage.

Question 18 : What does new do?  
Answer :: new creates an empty object, sets its [[Prototype]] to constructor.prototype, binds this to that object during constructor execution, and returns it unless a non-primitive is explicitly returned.

Question 19 : Object.assign vs spread?  
Answer :: Both perform shallow copies of enumerable own properties; assign returns the mutated target and can trigger setters, while spread is syntactic sugar returning a new object.

Question 20 : Freeze vs seal vs preventExtensions?  
Answer :: Object.freeze disallows adding/removing/changing properties, Object.seal disallows add/remove but allows value changes, and Object.preventExtensions only disallows adding.

Question 21 : Map vs Object?  
Answer :: Map supports arbitrary key types, predictable iteration order, and a size property, while Object keys are strings/symbols and may inherit properties from the prototype.

Question 22 : WeakMap vs Map?  
Answer :: WeakMap holds object keys weakly and is non-iterable, enabling memory-leak-safe caches where entries can be garbage-collected when keys become unreachable.

### Arrays and collections
Question 23 : map vs forEach?  
Answer :: map transforms and returns a new array of the same length without mutating input, while forEach iterates for side effects and returns undefined.

Question 24 : filter vs reduce?  
Answer :: filter selects elements matching a predicate returning a subset, while reduce folds the array into a single accumulated result such as a sum, object, or map.

Question 25 : for...in vs for...of?  
Answer :: for...in iterates over enumerable keys including inherited, while for...of iterates over values produced by an iterable's Symbol.iterator.

Question 26 : How to flatten arrays?  
Answer :: Use Array.prototype.flat with a depth (e.g., flat(1) or flat(Infinity)) or implement recursion/reduce in older environments for deep flattening.

Question 27 : What are Typed Arrays?  
Answer :: Typed arrays are fixed-length views over ArrayBuffer like Uint8Array or Float32Array for efficient binary data manipulation in Web APIs and performance-critical code.

### Asynchronous JavaScript
Question 28 : What is the event loop?  
Answer :: The event loop drains task queues when the call stack is empty, coordinating macro- and microtask execution to produce the observed ordering of callbacks.

Question 29 : Microtasks vs macrotasks?  
Answer :: Microtasks (Promises, MutationObserver) run with higher priority after the current call stack and before rendering, while macrotasks (setTimeout, message) run in subsequent ticks.

Question 30 : Promise states and usage?  
Answer :: A promise starts pending and settles once to fulfilled or rejected, with chaining via then/catch/finally and composition via helpers to manage concurrent flows.

Question 31 : async/await semantics?  
Answer :: async functions return promises and pause at await until resolution or rejection, enabling imperative-style flow while preserving asynchronous non-blocking behavior.

Question 32 : all vs race vs allSettled vs any?  
Answer :: all fulfills when all inputs fulfill or rejects fast, race settles on the first result, allSettled returns outcome objects for all, and any fulfills on the first success or throws AggregateError on all rejections.

Question 33 : Why setTimeout(fn, 0) can delay?  
Answer :: Zero-delay timers still enqueue a macrotask that runs after the stack and microtasks, and browsers impose minimum clamping, so execution isn't immediate.

Question 34 : How to cancel async work?  
Answer :: AbortController provides a signal that propagates abort to compliant APIs like fetch, allowing cooperative cancellation and cleanup.

### Browser and DOM
Question 35 : DOM vs BOM?  
Answer :: The DOM is a tree representation and API for documents enabling queries and mutations, while the BOM covers browser-specific globals like window, navigator, and screen.

Question 36 : Bubbling vs capturing?  
Answer :: Events can travel down during capture and up during bubble; handlers can opt into capture, and propagation can be stopped to prevent ancestor handling.

Question 37 : addEventListener options?  
Answer :: The third argument accepts options such as capture, once for auto-removal, passive to hint no preventDefault in scroll handlers, and signal for abortable listeners.

Question 38 : Event delegation?  
Answer :: A single ancestor listener can handle events from many children by inspecting event.target, improving performance and simplifying dynamic UIs.

Question 39 : Storage vs cookies?  
Answer :: localStorage persists per-origin until cleared, sessionStorage persists per-tab session, while cookies attach to HTTP requests and include flags for expiry, security, and scope.

Question 40 : Same-origin policy?  
Answer :: This security model prevents scripts from one origin directly reading or manipulating resources from another without explicit permission mechanisms.

Question 41 : What is CORS?  
Answer :: CORS lets servers declare which cross-origin requests are allowed via headers like Access-Control-Allow-Origin, enabling controlled resource sharing.

### Modules and tooling
Question 42 : ESM vs CommonJS?  
Answer :: ESM has static import/export and live bindings friendly to tree-shaking, while CommonJS uses require/module.exports with dynamic loading semantics and value copies at import time.

Question 43 : Default vs named exports?  
Answer :: A module may have one default export imported without braces and many named exports matched by identifier, with both coexisting when needed.

Question 44 : dynamic import()?  
Answer :: import() returns a promise resolving to a module, enabling on-demand loading for routes, features, or performance-sensitive bundles.

Question 45 : Tree-shaking concept?  
Answer :: Tree-shaking removes unused ESM exports at build time via static analysis, shrinking bundles and improving load performance.

Question 46 : Transpile vs polyfill?  
Answer :: Transpiling rewrites syntax to older targets (e.g., arrow to function), while polyfills implement missing runtime APIs like Promise or fetch for compatibility.

Question 47 : What are source maps?  
Answer :: Source maps map transformed or minified code back to original sources, enabling breakpoints and stack traces in developer tools that reference authored files.

### Types and operators
Question 48 : Symbols and their use?  
Answer :: Symbols are unique, immutable identifiers often used as non-colliding object keys or to customize well-known protocols like Symbol.iterator.

Question 49 : Iterables and iterators?  
Answer :: An iterable implements Symbol.iterator returning an iterator with next() to produce {value, done}, powering for...of, spread, and destructuring.

Question 50 : Generators overview?  
Answer :: Generators declared with function* produce lazy sequences via yield and can receive input back with next(arg), enabling coroutine-like flows.[5][3]

Question 51 : BigInt basics?  
Answer :: BigInt represents arbitrarily large integers with an n suffix, cannot mix with number without explicit conversion, and supports arithmetic suited for large counters or cryptography.

Question 52 : Destructuring patterns?  
Answer :: Destructuring binds array or object fields to variables with defaults and renaming, improving readability and reducing boilerplate in parameter lists.

Question 53 : Spread vs rest?  
Answer :: Spread expands arrays/objects into lists or properties, while rest collects remaining items into arrays or objects in function parameters or patterns.

Question 54 : Optional chaining and nullish coalescing?  
Answer :: Optional chaining safely returns undefined on null/undefined receivers instead of throwing, while ?? provides defaults only for nullish values rather than all falsy ones.

Question 55 : Why avoid eval?  
Answer :: eval executes strings as code, disabling many engine optimizations and introducing security risks like injection, making safer alternatives preferable.

### Error handling and debugging
Question 56 : try/catch/finally behavior?  
Answer :: try runs guarded code, catch handles thrown errors with access to the exception, and finally executes regardless to perform cleanup like releasing resources.

Question 57 : Custom errors?  
Answer :: Extend Error, call super(message), set name, and preserve prototype to maintain instanceof checks and meaningful stack traces in logs and monitoring.

Question 58 : What is a stack trace?  
Answer :: A stack trace lists active call frames at the throw site, enabling pinpointing of failure origins and code paths during debugging.

Question 59 : debugger statement?  
Answer :: In supported tools, debugger triggers a breakpoint when devtools are open, pausing execution at that line to inspect scope, call stack, and values.

### Performance, memory, and security
Question 60 : Common memory leaks?  
Answer :: Leaks often stem from unremoved event listeners, lingering timers/intervals, accidental globals, and caches retaining references that prevent garbage collection.

Question 61 : Garbage collection basics?  
Answer :: Modern engines use reachability analysis (e.g., mark-and-sweep) to free objects not reachable from roots like the global object or live closures.

Question 62 : Debounce vs throttle?  
Answer :: Debounce delays execution until activity stops to reduce bursty calls, while throttle enforces a maximum invocation rate for steady pacing.

Question 63 : Preventing XSS?  
Answer :: Avoid inserting untrusted HTML with innerHTML, prefer textContent or safe templating, sanitize inputs/outputs, and enforce Content Security Policy where possible.

Question 64 : CSRF mitigation?  
Answer :: Use same-site cookies, anti-CSRF tokens, and origin checks on state-changing requests to ensure only intended, authenticated actions are accepted.