/*
A Better Approach
We need to distribute items into bags dynamically, ensuring:

No bag exceeds its individual capacity.
All items are packed efficiently.
This is a bin-packing problem. A simple greedy strategy is:

Sort items in descending order (larger items first).
Try placing each item into the first available bag that has enough space.
If no bag has enough space, start a new bag.
*/

const calculateCapacity = function (arrayOfItems, numberOfBags, perBagCapacity) {
    console.log("Calculation Function started....");

    // Sort items in descending order (largest items first)
    arrayOfItems.sort((a, b) => b - a);
    console.log("Sorted Items: ", arrayOfItems);

    // Array to track remaining capacity of each bag
    let bags = new Array(numberOfBags).fill(perBagCapacity);
    
    for (let item of arrayOfItems) {
        let placed = false;
        
        // Try to fit the item in an existing bag
        for (let i = 0; i < bags.length; i++) {
            if (bags[i] >= item) {
                bags[i] -= item;
                placed = true;
                break;
            }
        }

        // If the item couldn't be placed, return false
        if (!placed) {
            console.log("Item", item, "could not be placed in any bag.");
            return false;
        }
    }

    console.log("All items fit into the bags.");
    return true;
};

// Test cases
console.log(calculateCapacity([9, 2, 8, 1, 7, 3], 2, 10)); // Expected: false
console.log("================================================================")
console.log(calculateCapacity([9, 2, 8, 1, 7, 3], 3, 10)); // Expected: true
console.log("================================================================")
console.log(calculateCapacity([5, 5, 5, 5, 5], 3, 10)); // Expected: true

/*
How This Works

Sorting in descending order
Ensures that large items are placed first, reducing wasted space.

Greedy fitting
Tries placing each item in the first available bag.

Checks feasibility dynamically
If any item does not fit, return false immediately.

Example Walkthrough
calculateCapacity([9, 2, 8, 1, 7, 3], 2, 10);
Sort items: [9, 8, 7, 3, 2, 1]
Bags: [10, 10]
Place 9 → [1, 10]
Place 8 → [1, 2]
Place 7 → ❌ No space in any bag → Return false

Final Thoughts
✅ This approach ensures that all items actually fit into bags.
✅ It solves the logical bug in the original function.
✅ It's efficient and works for most practical cases.

Would you like further improvements, such as trying dynamic programming for an optimal solution?
*/

/*
Step 1: Sorting the Items in Descending Order
arrayOfItems.sort((a, b) => b - a);
Sorts the items in descending order (largest first).
Sorting ensures that we place the largest items first, reducing wasted space

Step 2: Creating an Array for Bags
let bags = new Array(numberOfBags).fill(perBagCapacity);
Creates an array to track the remaining capacity of each bag.
Fills all bags with their maximum capacity at the beginning.

Step 3: Placing Each Item in a Bag
for (let item of arrayOfItems) {
Iterates through each item in arrayOfItems (after sorting).

let placed = false;
A flag variable to track whether the current item was placed in a bag.

Step 4: Trying to Fit the Item in an Existing Bag
    for (let i = 0; i < bags.length; i++) {
    Loops through each bag to find one that can hold the current item.

        if (bags[i] >= item) {
    Checks if the current bag has enough space for the item.

            bags[i] -= item;
    Reduces the remaining space in the selected bag after adding the item.

            placed = true;
            break;
    Marks the item as placed and exits the loop (since we only need to place it in one bag).

Step 5: If an Item Cannot Be Placed, Return false
    if (!placed) {
        console.log("Item", item, "could not be placed in any bag.");
        return false;
    }
If no bag had enough space, print an error message and return false immediately.
Example:
If bags are [1, 2, 0] and we try to place an item of size 3, it won't fit, so we return false.

Step 6: If All Items Fit, Return true
console.log("All items fit into the bags.");
return true;
If we successfully placed all items, return true.
*/

/*
Example Walkthrough
Let's step through an example:
calculateCapacity([9, 2, 8, 1, 7, 3], 3, 10);

Step 1: Sorting Items
Original: [9, 2, 8, 1, 7, 3]
Sorted:   [9, 8, 7, 3, 2, 1]

Step 2: Initializing Bags
bags = [10, 10, 10]

Step 3: Placing Items
Item	Bags Before	    Placed In Bag	Bags After
9       [10, 10, 10]    Bag 1	        [1, 10, 10]
8       [1, 10, 10] 	Bag 2	        [1, 2, 10]
7       [1, 2, 10]  	Bag 3	        [1, 2, 3]
3       [1, 2, 3]   	Bag 3	        [1, 2, 0]
2       [1, 2, 0]   	Bag 2	        [1, 0, 0]
1       [1, 0, 0]   	Bag 1	        [0, 0, 0]
✅ All items are placed successfully, so we return true.
*/