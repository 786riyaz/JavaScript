/*
bag capacity problem of coding interview. 
You have forgotten to bring the bag for shopping.
And you don't want to buy extra bags.
So you are trying to fit all the different purchased items in minimum bags.

if given bag is sufficient for mentioned products then return "true" else return "false"
*/

const calculateCapacity = function (arrayOfItems, numberOfBags, perBagCapacity) {
    console.log("Calculation Function started....");

    let sumOfItemsValue = arrayOfItems.reduce((sum, item) => sum + item, 0);
    console.log("Total Sum of Items Values ::", sumOfItemsValue);

    let totalBagCapacity = numberOfBags * perBagCapacity;
    console.log("Total Bags Capacity ::", totalBagCapacity);

    console.log("Calculation Function ended....");
    
    return totalBagCapacity >= sumOfItemsValue;
};

console.log(calculateCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5, 10));
console.log("================================================================")
console.log(calculateCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 8, 10));
