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


// Insertion Sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i ++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        // compare and shift elements

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // insert the number
        arr[j + 1] = numberToInsert;
    }
    return arr;
}


console.log(insertionSort[-6,2,-3,4,55,20,66]); // [-6,-3,2,4,20,55,66]


/**
 * Quick Sort
 * 1. Pick a pivot element
 * 2. Partition the array into two sub-arrays: elements less than the pivot to left and elements 
 * greater than the pivot to right
 * 3. Call quicksort recursively on the left sub-array
 * 4. Call quicksort recursively on the right sub-array
 * 5. Return the resulting array
 */


function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[length-1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            rigth.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}


console.log(quicksort([5, 3, 8, 20, -1, 4])); // [ -1, 3, 4, 5, 8, 20 ]
