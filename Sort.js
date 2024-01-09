// Bubble sort :
// 1. Compare adjacent items
// 2. Swap them if the first one is bigger than the second one
// 3. Continue until the end of the array is reached
// 4. Repeat steps 1-3 until no more swaps are made


function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i=0; i<arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped);
    return arr;
}

console.log(bubbleSort([5, 3, 8, 20, -1, 4])); // [ -1, 3, 4, 5, 8, 20 ]
