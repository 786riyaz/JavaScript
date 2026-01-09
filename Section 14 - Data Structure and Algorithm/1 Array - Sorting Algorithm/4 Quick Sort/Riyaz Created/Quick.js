console.clear();
console.log("Application Started.....\n");

let array = [3, 2, 5, 0, 1, 8, 7, 6, 9, 4];

quicksort = function (start, end) {
    let pivotIndex = end;
    let pivotValue = array[pivotIndex];
    console.log("Processing Array from Index", start, 'to', end, 'with Pivot Value ::', pivotValue);
    // console.log("Pivot Value :: ", pivotValue);
    let currentIndex = start;
    let swapIndex = start - 1;
    // let currentIndex = swapIndex = -1;
    while (currentIndex <= end) {
        if (array[currentIndex] <= pivotValue) {
            if (swapIndex < start) { swapIndex = start }
            else { swapIndex++; }

            if (currentIndex > swapIndex) {
                let temp;
                temp = array[currentIndex];
                array[currentIndex] = array[swapIndex];
                array[swapIndex] = temp;
            }
        }
        currentIndex++;
    }
    console.log(JSON.stringify(array) + "\n");

    if (swapIndex - start > 1) { quicksort(start, swapIndex - 1); }
    if (end - swapIndex > 1) { quicksort(swapIndex + 1, end); }
}

quicksort(0, array.length - 1);