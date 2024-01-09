// Binary Search


/* Binary search is an efficient algorithm for finding a target value within a sorted array.
Here's a simple explanation and implementation in JavaScript:

### Binary Search Algorithm:

1. **Initialize:** Set two pointers, `left` and `right`, to the start and end of the sorted array, respectively.

2. **Search:** Repeat until `left` is less than or equal to `right`:
   - Find the middle index as `mid` using `(left + right) / 2`.
   - If the middle element is equal to the target, return the index (`mid`).
   - If the middle element is less than the target, set `left = mid + 1`.
   - If the middle element is greater than the target, set `right = mid - 1`.

3. **Result:** If the target is not found, return a special value (e.g., -1).

*/


function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found at index mid
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
  console.log(`Target ${targetValue} found at index ${result}`);
} else {
  console.log(`Target ${targetValue} not found in the array`);
}


// Big O Analysis = O(log n)
/*
This implementation demonstrates a basic binary search.
The key idea is to narrow down the search range by comparing the middle element
with the target and adjusting the pointers accordingly. The time complexity of binary search is O(log n),
making it very efficient for sorted arrays.
*/


// Linear Search

/* Linear search is a very simple search algorithm. In this type of search,
a sequential search is made over all items one by one.
Every item is checked and if a match is found then that particular item is returned,
otherwise the search continues till the end of the data collection.
*/

function linearSearch(arr, target) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found at index i
    }
  }
  return -1; // Target not found
} 

//Big O analysis = O(n)

// Binary search useing recursion


function binarySearch (arr, target) {
  return search(arr, target, 0, arr.length-1);
}

function search(arr, target, left, right) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {
        return search(arr, target, mid - 1, right);
    } else {
        return search(arr, target, left, mid + 1);
    }
}


// Big O analysis = O(log n)
