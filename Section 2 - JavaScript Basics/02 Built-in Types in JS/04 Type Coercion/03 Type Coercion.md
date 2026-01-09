# 🧠 **SECTION 1 — Full Type Coercion Cheat-Sheet**

## 🔹 **1. Truthy & Falsy Values**

### **Falsy values:**

```
false
0
-0
0n (BigInt)
"" (empty string)
null
undefined
NaN
```

Everything else is **truthy**, including:

```
[]
{}
"0"
"false"
() => {}
new Boolean(false)
```

---

## 🔹 **2. `==` Loose Equality Rules (Important for Interviews)**

### ✔ If types differ:

JavaScript tries to convert them.

Key rules:

### **Rule 1: Boolean → Number**

```
true  → 1
false → 0
```

### **Rule 2: String → Number (when used with -, *, /, <, >, == comparison)**

```
"10" → 10
"075" → 75
""   → 0
"abc" → NaN
```

### **Rule 3: Objects/Arrays → Primitives**

`ToPrimitive()` is applied:

```
[]  → "" → 0
[1] → "1" → 1
[1,2] → "1,2" → NaN
{}  → "[object Object]" → NaN
```

---

## 🔹 **3. `+` Operator Rules (Most Confusing)**

### If **either side is a string → string concatenation**

```
10 + "5" → "105"
"" + 10 → "10"
```

### Otherwise → numeric addition:

```
5 + true → 6
"5" - "2" → 3
"5" * "2" → 10
```

---

## 🔹 **4. Unary Operators**

### Unary `+`

```
+true  → 1
+false → 0
+""    → 0
+[]    → 0
+{}    → NaN
+"123" → 123
```

### Unary `!`

```
!truthy → false
!falsy  → true
```

---

## 🔹 **5. Special weird rules**

### `null == undefined` → **true**

### All other `null` comparisons → false

```
null == 0 → false
null < 1 → true
null <= 1 → true
```

### NaN never equals anything (even itself)

```
NaN == NaN → false
```

---

# 🧩 **SECTION 2 — More Tricky Interview Questions**

---

## **Q1. `[] + []` → `""`**

Both arrays convert to empty strings:

```
[] → ""
"" + "" → ""
```

---

## **Q2. `[] + {}` → `"[object Object]"`**

```
[] → ""
{} → "[object Object]"
"" + "[object Object]" → "[object Object]"
```

---

## **Q3. `{} + {}` → "[object Object][object Object]"**

BUT only when not at start of line.

```
({} + {}) → "[object Object][object Object]"
```

At start of line:

```
{} + {}   // empty block, unary +{} → NaN
NaN
```

---

## **Q4. `"5" + + "5"` → `"55"`**

Unary plus converts:

```
+"5" → 5
"5" + 5 → "55"
```

---

## **Q5. `[] == ![]` → true**

* `![]` → false
* `[]` → 0
* `false` → 0

```
0 == 0 → true
```

---

## **Q6. `"b" + "a" + + "a" + "a"` → `"baNaNa"` (famous)**

```
+"a" → NaN
"b" + "a" + NaN + "a" 
→ "baNaNa"
```

---

## **Q7. `null == 0` → false (but `< 1` returns true)**

```
null == 0 → false
null < 1 → true
null <= 1 → true
```

Reason: **comparison converts null to 0**, equality does not.

---

## **Q8. `true == "1"` → true**

```
true → 1
"1" → 1
1 == 1 → true
```

---

## **Q9. `[1,2] == "1,2"` → true**

```
[1,2].toString() → "1,2"
"1,2" == "1,2" → true
```

---

## **Q10. `"10" > "2"` → false**

String comparison → lexicographical:

```
"1" < "2"
```

So `"10"` comes before `"2"`.

---

# 📝 **SECTION 3 — Practice Quiz (with Answers After)**

Try these yourself first.

---

## **QUIZ**

### **1.**

```
console.log("" == 0);
```

### **2.**

```
console.log("0" == false);
```

### **3.**

```
console.log([] == 0);
```

### **4.**

```
console.log({} == {});
```

### **5.**

```
console.log(null == undefined);
```

### **6.**

```
console.log("5" - - "2");
```

### **7.**

```
console.log([1] + [1]);
```

### **8.**

```
console.log("5" + 3 - 2);
```

### **9.**

```
console.log([] + {});
```

### **10.**

```
console.log(true + false + true);
```

---

# ✅ **QUIZ ANSWERS**

### **1. `"" == 0` → true**

`"" → 0`

---

### **2. `"0" == false` → true**

`"0" → 0`, `false → 0`

---

### **3. `[] == 0` → true**

`[] → "" → 0`

---

### **4. `{ } == { }` → false**

Different references.

---

### **5. `null == undefined` → true**

Special rule.

---

### **6. `"5" - - "2"` → 7**

`- -` → plus.

---

### **7. `[1] + [1]` → `"11"`**

Both arrays → "1"

```
"1" + "1" = "11"
```

---

### **8. `"5" + 3 - 2` → 51**

```
"5" + 3 → "53"
"53" - 2 → 51
```

---

### **9. `[] + {}` → "[object Object]"**

`[] → ""`
`{} → "[object Object]"`

---

### **10. `true + false + true` → 2**

```
true → 1
false → 0
1 + 0 + 1 = 2
```