# ✅ JavaScript Object Methods — Complete Notes

---

## 🔹 A. Object Static Methods

*(Most Object methods are static: `Object.method()`)*

---

## 1️⃣ Object Creation & Structure

---

### 1. `Object.create()`

**Syntax**

```js
Object.create(proto, propertiesObject?)
```

**Parameters**

* `proto` → object to be used as prototype
* `propertiesObject` (optional) → property descriptors

**Description**
Creates a new object with the specified prototype.

**Return Type**

* `Object`

**Mutates Existing Object**

* ❌ No

**Example**

```js
const proto = { greet() { return "hi"; } };
const obj = Object.create(proto);

obj.greet();        // "hi"
Object.getPrototypeOf(obj) === proto; // true
```

---

### 2. `Object.assign()`

**Syntax**

```js
Object.assign(target, ...sources)
```

**Parameters**

* `target` → destination object
* `...sources` → source objects

**Description**
Copies enumerable properties from sources to target.

**Return Type**

* `Object` (target)

**Mutates Existing Object**

* ✅ Yes (target)

**Example**

```js
const a = { x: 1 };
const b = { y: 2 };

Object.assign(a, b); // { x:1, y:2 }
// a is mutated
```

---

### 3. `Object.keys()`

**Syntax**

```js
Object.keys(object)
```

**Parameters**

* `object` → object to inspect

**Description**
Returns array of enumerable property names.

**Return Type**

* `Array<string>`

**Mutates**

* ❌ No

**Example**

```js
Object.keys({ a: 1, b: 2 });
// ["a", "b"]
```

---

### 4. `Object.values()`

**Syntax**

```js
Object.values(object)
```

**Description**
Returns array of enumerable property values.

**Return Type**

* `Array<any>`

**Example**

```js
Object.values({ a: 1, b: 2 });
// [1, 2]
```

---

### 5. `Object.entries()`

**Syntax**

```js
Object.entries(object)
```

**Description**
Returns array of `[key, value]` pairs.

**Return Type**

* `Array<[string, any]>`

**Example**

```js
Object.entries({ a: 1, b: 2 });
// [["a",1], ["b",2]]
```

---

## 2️⃣ Property Checking

---

### 6. `Object.hasOwn()`

**Syntax**

```js
Object.hasOwn(object, property)
```

**Description**
Checks if object has own property (safe alternative to `hasOwnProperty`).

**Return Type**

* `boolean`

**Example**

```js
Object.hasOwn({ a: 1 }, "a"); // true
```

---

### 7. `hasOwnProperty()` (Instance)

**Syntax**

```js
object.hasOwnProperty(property)
```

**Return Type**

* `boolean`

**Example**

```js
({ a: 1 }).hasOwnProperty("a"); // true
```

---

### 8. `propertyIsEnumerable()`

**Syntax**

```js
object.propertyIsEnumerable(property)
```

**Description**
Checks if property is enumerable.

**Return Type**

* `boolean`

**Example**

```js
({ a: 1 }).propertyIsEnumerable("a"); // true
```

---

## 3️⃣ Object Comparison & Prototype

---

### 9. `Object.is()`

**Syntax**

```js
Object.is(value1, value2)
```

**Description**
Compares two values (better than `===` for edge cases).

**Return Type**

* `boolean`

**Example**

```js
Object.is(NaN, NaN);     // true
Object.is(+0, -0);      // false
```

---

### 10. `Object.getPrototypeOf()`

**Syntax**

```js
Object.getPrototypeOf(object)
```

**Return Type**

* `Object | null`

**Example**

```js
Object.getPrototypeOf({}); // Object.prototype
```

---

### 11. `Object.setPrototypeOf()`

**Syntax**

```js
Object.setPrototypeOf(object, prototype)
```

**Description**
Changes prototype of an object (slow – avoid in production).

**Return Type**

* `Object`

**Mutates**

* ✅ Yes

**Example**

```js
Object.setPrototypeOf({}, null);
```

---

## 4️⃣ Property Descriptors

---

### 12. `Object.defineProperty()`

**Syntax**

```js
Object.defineProperty(object, key, descriptor)
```

**Description**
Defines or modifies a property.

**Return Type**

* `Object`

**Example**

```js
const obj = {};
Object.defineProperty(obj, "a", { value: 1, writable: false });

obj.a; // 1
```

---

### 13. `Object.defineProperties()`

**Syntax**

```js
Object.defineProperties(object, descriptors)
```

**Return Type**

* `Object`

**Example**

```js
Object.defineProperties({}, {
  a: { value: 1 },
  b: { value: 2 }
});
```

---

### 14. `Object.getOwnPropertyDescriptor()`

**Syntax**

```js
Object.getOwnPropertyDescriptor(object, key)
```

**Return Type**

* `PropertyDescriptor | undefined`

**Example**

```js
Object.getOwnPropertyDescriptor({ a:1 }, "a");
// { value:1, writable:true, enumerable:true, configurable:true }
```

---

### 15. `Object.getOwnPropertyDescriptors()`

**Return Type**

* `Object`

```js
Object.getOwnPropertyDescriptors({ a:1 });
```

---

## 5️⃣ Object Integrity (Immutability)

---

### 16. `Object.freeze()`

**Syntax**

```js
Object.freeze(object)
```

**Description**
Prevents all modifications.

**Return Type**

* `Object`

**Example**

```js
const obj = { a:1 };
Object.freeze(obj);
obj.a = 2; // ignored (or error in strict mode)
```

---

### 17. `Object.seal()`

**Description**
Prevents adding/removing properties.

**Return Type**

* `Object`

```js
const obj = { a:1 };
Object.seal(obj);
obj.a = 2;   // allowed
```

---

### 18. `Object.preventExtensions()`

**Description**
Prevents adding new properties.

**Return Type**

* `Object`

```js
const obj = {};
Object.preventExtensions(obj);
obj.a = 1; // not added
```

---

### 19. `Object.isFrozen()`

**Return Type**

* `boolean`

```js
Object.isFrozen(Object.freeze({})); // true
```

---

### 20. `Object.isSealed()`

```js
Object.isSealed(Object.seal({})); // true
```

---

### 21. `Object.isExtensible()`

```js
Object.isExtensible({}); // true
```

---

## 6️⃣ Conversion & Stringification

---

### 22. `toString()` (Instance)

**Return Type**

* `string`

```js
({ a:1 }).toString(); // "[object Object]"
```

---

### 23. `valueOf()` (Instance)

**Return Type**

* `Object`

```js
({ a:1 }).valueOf(); // { a:1 }
```

---

### 24. `Object.toString()` (via prototype)

```js
Object.prototype.toString.call([]); // "[object Array]"
```

---

## 7️⃣ Utility & Advanced

---

### 25. `Object.fromEntries()`

**Syntax**

```js
Object.fromEntries(iterable)
```

**Description**
Converts `[key,value]` pairs into object.

**Return Type**

* `Object`

```js
Object.fromEntries([["a",1],["b",2]]);
// { a:1, b:2 }
```

---

### 26. `Object.getOwnPropertyNames()`

**Return Type**

* `Array<string>`

```js
Object.getOwnPropertyNames({ a:1 });
// ["a"]
```

---

### 27. `Object.getOwnPropertySymbols()`

**Return Type**

* `Array<Symbol>`

```js
const s = Symbol("x");
Object.getOwnPropertySymbols({ [s]: 1 });
// [Symbol(x)]
```

---

## 8️⃣ Summary Table (Interview Gold)

| Category    | Key Methods           |
| ----------- | --------------------- |
| Creation    | create, assign        |
| Inspection  | keys, values, entries |
| Integrity   | freeze, seal          |
| Comparison  | Object.is             |
| Prototype   | getPrototypeOf        |
| Descriptors | defineProperty        |

---

## ✅ FINAL NOTES

* Objects are **mutable by default**
* `Object.assign()` is **shallow copy**
* Prefer `Object.hasOwn()` over `hasOwnProperty`
* `freeze ≠ deep freeze`
* Property descriptors are **core JS internals**