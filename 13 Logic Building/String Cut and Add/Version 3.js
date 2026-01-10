function performCutting(inputString, m, n) {
    console.log("Function Starts...");

    let counter = 0;
    let newString = inputString;
    const seen = new Set(); // Store encountered strings to detect cycles
    const mapping = [m, n]; // Alternate cuts for Harry and Potter

    while (!seen.has(newString)) {
        seen.add(newString);
        counter++;
        
        let cutLength = mapping[counter % 2]; // Alternate between M and N
        newString = newString.slice(-cutLength) + newString.slice(0, newString.length - cutLength);
        
        if (newString === inputString) break;
    }

    console.log(`Turns required to make original string: ${counter}`);
    console.log("Function Ends...");
}

// Test cases
console.clear();
performCutting("AbcDef", 2, 1);
console.log();
performCutting("AbcAbc", 2, 1);


/*
Step-by-Step Execution
Let’s say we run:

javascript
Copy
Edit
performCutting("AbcDef", 2, 1);
Initialization

inputString = "AbcDef"
m = 2, n = 1
counter = 0
seen = {} (Empty Set)
mapping = [2, 1] (Alternating values for Harry & Potter)
newString = "AbcDef"
Loop Execution

Turn 1 (Harry - M = 2)
Cut last 2 letters "ef", move to front.
"AbcDef" → "efAbcD"
Add "efAbcD" to seen.
counter = 1
Turn 2 (Potter - N = 1)
Cut last 1 letter "D", move to front.
"efAbcD" → "DefAbc"
Add "DefAbc" to seen.
counter = 2
Turn 3 (Harry - M = 2)
"DefAbc" → "bcDefA"
Add "bcDefA" to seen.
counter = 3
Turn 4 (Potter - N = 1)
"bcDefA" → "AbcDef"
Matches original string! 🎉
Exit loop, print counter = 4.
Key Optimizations
✅ Using Set (seen) to track visited strings

If a string repeats, we stop early to avoid unnecessary loops.
✅ Efficient toggling of M and N using counter % 2

counter % 2 == 0 → Harry's turn (M)
counter % 2 == 1 → Potter's turn (N)
✅ Avoids redundant temp variables

Directly updates newString instead of using extra variables.
Final Thoughts
This optimized approach ensures minimal operations while keeping the code clean and readable. 🚀

Let me know if anything is unclear! 😊
*/