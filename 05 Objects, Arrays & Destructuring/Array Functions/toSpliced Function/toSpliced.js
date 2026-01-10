const months = ['Jan', 'March', 'April', 'June'];
const newMonths = months.toSpliced(1, 0, 'Feb');
console.log("Added Month at position 1 :: ",newMonths);

const removedMonths = newMonths.toSpliced(3, 1);
console.log("Removed Month at position 3 :: ",removedMonths);