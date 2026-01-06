# JavaScript String Methods – Complete Notes

---

## 1. String Creation & Basics

### 1.1 String Literals

```js
let s1 = "Hello";
let s2 = 'World';
let s3 = `Hello World`;
```

### 1.2 String Constructor

```js
let s = new String("Hello"); // Object (NOT recommended)
```

⚠️ **Best Practice:** Always use string literals, not `new String()`.

---

## 2. String Length

### `length`

Returns the number of UTF-16 code units.

```js
"Hello".length; // 5
```

⚠️ Emojis may count as 2:

```js
"😊".length; // 2
```

---

## 3. Accessing Characters

### 3.1 `charAt(index)`

Returns character at index.

```js
"Hello".charAt(1); // "e"
```

### 3.2 `charCodeAt(index)`

Returns UTF-16 code.

```js
"ABC".charCodeAt(0); // 65
```

### 3.3 `at(index)` (ES2022)

Supports negative indexing.

```js
"Hello".at(-1); // "o"
```

### 3.4 Bracket Notation

```js
"Hello"[0]; // "H"
```

---

## 4. Searching in Strings

### 4.1 `indexOf(searchValue, fromIndex?)`

```js
"Hello World".indexOf("World"); // 6
```

### 4.2 `lastIndexOf(searchValue, fromIndex?)`

```js
"Hello Hello".lastIndexOf("Hello"); // 6
```

### 4.3 `includes(searchValue, position?)`

Returns boolean.

```js
"JavaScript".includes("Script"); // true
```

### 4.4 `startsWith(searchValue, position?)`

```js
"JavaScript".startsWith("Java"); // true
```

### 4.5 `endsWith(searchValue, length?)`

```js
"file.txt".endsWith(".txt"); // true
```

---

## 5. Extracting Parts of Strings

### 5.1 `slice(start, end?)`

Supports negative indexes.

```js
"Hello World".slice(0, 5); // "Hello"
"Hello".slice(-2); // "lo"
```

### 5.2 `substring(start, end?)`

Negative values treated as `0`.

```js
"Hello".substring(1, 4); // "ell"
```

### 5.3 `substr(start, length)` ⚠️ Deprecated

```js
"Hello".substr(1, 3); // "ell"
```

❌ Avoid using `substr`.

---

## 6. Modifying Strings (Return New String)

### 6.1 `toUpperCase()`

```js
"hello".toUpperCase(); // "HELLO"
```

### 6.2 `toLowerCase()`

```js
"HELLO".toLowerCase(); // "hello"
```

### 6.3 `trim()`

Removes whitespace from both ends.

```js
"  hi  ".trim(); // "hi"
```

### 6.4 `trimStart()` / `trimEnd()`

```js
"  hi".trimStart(); // "hi"
```

---

## 7. Replacing Content

### 7.1 `replace(searchValue, replaceValue)`

Replaces **first match only**.

```js
"foo bar foo".replace("foo", "baz"); // "baz bar foo"
```

### 7.2 `replaceAll(searchValue, replaceValue)`

Replaces **all occurrences**.

```js
"foo foo".replaceAll("foo", "bar"); // "bar bar"
```

### 7.3 Using Regex

```js
"foo foo".replace(/foo/g, "bar");
```

---

## 8. Splitting & Joining

### 8.1 `split(separator, limit?)`

```js
"1,2,3".split(","); // ["1","2","3"]
```

```js
"hello".split(""); // ["h","e","l","l","o"]
```

---

## 9. Concatenation

### 9.1 `concat()`

```js
"Hello".concat(" ", "World"); // "Hello World"
```

### 9.2 Using `+` (Preferred)

```js
"Hello" + " World";
```

---

## 10. Padding Strings

### 10.1 `padStart(targetLength, padString?)`

```js
"5".padStart(3, "0"); // "005"
```

### 10.2 `padEnd(targetLength, padString?)`

```js
"5".padEnd(3, "0"); // "500"
```

---

## 11. Repeating Strings

### `repeat(count)`

```js
"ha".repeat(3); // "hahaha"
```

---

## 12. Comparison & Locale

### 12.1 `localeCompare(otherString)`

```js
"a".localeCompare("b"); // -1
```

Returns:

* `-1` → before
* `0` → equal
* `1` → after

---

## 13. Unicode & Normalization

### 13.1 `normalize(form)`

```js
"é".normalize("NFC");
```

Used for Unicode consistency.

---

## 14. Pattern Matching (Regex)

### 14.1 `match(regex)`

```js
"abc123".match(/\d+/); // ["123"]
```

### 14.2 `matchAll(regex)`

Returns iterator.

```js
[..."a1b2".matchAll(/\d/g)];
```

### 14.3 `search(regex)`

Returns index.

```js
"abc123".search(/\d/); // 3
```

---

## 15. Conversion Methods

### 15.1 `toString()`

```js
let s = "hello";
s.toString(); // "hello"
```

### 15.2 `valueOf()`

```js
"hello".valueOf(); // "hello"
```

---

## 16. HTML Wrapper Methods ⚠️ Deprecated

❌ Avoid using in modern JS:

* `bold()`
* `italics()`
* `link()`
* `fontcolor()`

---

## 17. String Immutability (Very Important)

```js
let s = "Hello";
s[0] = "h";
console.log(s); // "Hello"
```

✔ Strings are **immutable** – methods always return new strings.

---

## 18. Common Interview Pitfalls

| Topic                     | Key Point                     |
| ------------------------- | ----------------------------- |
| `slice` vs `substring`    | `slice` supports negatives    |
| `replace` vs `replaceAll` | `replace` replaces only first |
| `length`                  | UTF-16 based                  |
| Strings                   | Immutable                     |
| `new String()`            | Creates object                |

---

## 19. Complete List (Quick Reference)

* `charAt`
* `charCodeAt`
* `at`
* `concat`
* `includes`
* `indexOf`
* `lastIndexOf`
* `startsWith`
* `endsWith`
* `slice`
* `substring`
* `substr` ❌
* `replace`
* `replaceAll`
* `split`
* `toUpperCase`
* `toLowerCase`
* `trim`
* `trimStart`
* `trimEnd`
* `padStart`
* `padEnd`
* `repeat`
* `match`
* `matchAll`
* `search`
* `localeCompare`
* `normalize`
* `toString`
* `valueOf`
