
/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/


// Sol 1 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0, j = 0;
    let len = 0;
    let arr = [];

    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] === undefined) {
            arr.push(nums2[j]);
            j++;
        } else if (nums2[j] === undefined) {
            arr.push(nums1[i]);
            i++;
        } else if (nums1[i] < nums2[j]) {
            arr.push(nums1[i]);
            i++;
        } else {
            arr.push(nums2[j]);
            j++;
        }
        len++;
    }

    if (len % 2 === 0) {
        return (arr[len / 2] + arr[(len / 2) - 1]) / 2;
    } else {
        return arr[Math.floor(len / 2)];
    }
};


// sol2 using binary search

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// divide and conquer or binary approach.

var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array.
    // divde them to 2 array.
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const totalLength = nums1.length + nums2.length;
    const halfLength = Math.floor((totalLength + 1) / 2);

    let left = 0;
    let right = nums1.length;

    while (left <= right) {
        const partitionX = Math.floor((left + right) / 2);
        const partitionY = halfLength - partitionX;

        const maxX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minX = (partitionX === nums1.length) ? Number.POSITIVE_INFINITY : nums1[partitionX];

        const maxY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minY = (partitionY === nums2.length) ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // Found the correct partition
            if (totalLength % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // Move partitionX to the left
            right = partitionX - 1;
        } else {
            // Move partitionX to the right
            left = partitionX + 1;
        }
    }
};
