
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

/*

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    // base condition
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Since the first element is always unique
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Moving unique element to the next position
            k++;
        }
    }

    return k;
};


/*
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

 

Example 1:

Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.
Example 2:

Input: g = [1,2], s = [1,2,3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2.
 

Constraints:

1 <= g.length <= 3 * 104
0 <= s.length <= 3 * 104
1 <= g[i], s[j] <= 231 - 1

*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let count = 0;

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            count++;
            i++;
        }
        // Move to the next available cookie
        j++;
    }

    return count;
}

/*

You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

The 2D array should contain only the elements of the array nums.
Each row in the 2D array contains distinct integers.
The number of rows in the 2D array should be minimal.
Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row.

Example 1:

Input: nums = [1,3,4,1,2,3,1]
Output: [[1,3,4,2],[1,3],[1]]
Explanation: We can create a 2D array that contains the following rows:
- 1,3,4,2
- 1,3
- 1
All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
It can be shown that we cannot have less than 3 rows in a valid array.
Example 2:

Input: nums = [1,2,3,4]
Output: [[4,3,2,1]]
Explanation: All elements of the array are distinct, so we can keep all of them in the first row of the 2D array.


Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= nums.length

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    nums.sort((a, b) => b - a);
   const result = [];

   for (const num of nums) {
       const rowIndex = result.findIndex(row => !row.includes(num));
       if (rowIndex === -1) {
           result.push([num]);
       } else {
           result[rowIndex].push(num);
       }
   }

   return result;
}


/*
You are given a 0-indexed array nums consisting of positive integers.

There are two types of operations that you can apply on the array any number of times:

Choose two elements with equal values and delete them from the array.
Choose three elements with equal values and delete them from the array.
Return the minimum number of operations required to make the array empty, or -1 if it is not possible.

 

Example 1:

Input: nums = [2,3,3,2,2,4,2,3,4]
Output: 4
Explanation: We can apply the following operations to make the array empty:
- Apply the first operation on the elements at indices 0 and 3. The resulting array is nums = [3,3,2,4,2,3,4].
- Apply the first operation on the elements at indices 2 and 4. The resulting array is nums = [3,3,4,3,4].
- Apply the second operation on the elements at indices 0, 1, and 3. The resulting array is nums = [4,4].
- Apply the first operation on the elements at indices 0 and 1. The resulting array is nums = [].
It can be shown that we cannot make the array empty in less than 4 operations.
Example 2:

Input: nums = [2,1,2,2,3,3]
Output: -1
Explanation: It is impossible to empty the array.
 

Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= 106

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let operations = 0;
    const elementCount = new Map();

    // Count occurrences of each element in the array
    for (const num of nums) {
        elementCount.set(num, (elementCount.get(num) || 0) + 1);
    }

    // Iterate through the map of element counts
    for (const [num, count] of elementCount) {
        // If an element occurs only once, it's not possible to form pairs or triplets
        if (count === 1) {
            return -1;
        }

        // Calculate operations based on the count of occurrences
        if (count % 3 === 0) {
            operations += count / 3;
        } else {
            let cnt = Math.floor(count / 3);
            let remainder = count % 3;

            // Adjust operations based on the remainder
            if (remainder === 1) {
                if (cnt > 0) {
                    cnt--;
                }
                remainder += 3;
                cnt += Math.floor(remainder / 2);
            } else {
                cnt += Math.floor(remainder / 2);
            }

            operations += cnt;
        }
    }

    return operations;
 };

/*
Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let b = [];
    nums2.forEach((num)  => {
        for (let i=0; i<nums1.length; i++) {
            if (num === nums1[i]) {
                if (!b.includes(num)) {
                    b.push(num);
                }
            }
        }
    })
    return b;
};



/*
You are given an integer array matches where matches[i] = [winneri, loseri]
indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.

Example 1:

Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
Example 2:

Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].


Constraints:

1 <= matches.length <= 105
matches[i].length == 2
1 <= winneri, loseri <= 105
winneri != loseri
All matches[i] are unique.
*/

// TLE:
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let win = new Set();
    let lose = new Set();

    matches.forEach((match) => {
        win.add(match[0]);
        lose.add(match[1]);
    });

    let neverLost = [...win].filter(player => !lose.has(player));
    let lostOnce = [...lose].filter(player => matches.filter(match => match[1] === player).length === 1);

    neverLost.sort((a, b) => a - b);
    lostOnce.sort((a, b) => a - b);

    return [neverLost, lostOnce];
};


// Python solution:

/*
class Solution(object):
    def findWinners(self, matches):
        win_count = Counter()
        lose_count = Counter()

        for match in matches:
            win_count[match[0]] += 1
            lose_count[match[1]] += 1

        never_lost = sorted([player for player in win_count if player not in lose_count])
        lost_once = sorted(player for player, count in lose_count.items() if count == 1)

        return [never_lost, lost_once]
*/

/*
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists
when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.



Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
 

Constraints:

-231 <= val <= 231 - 1
At most 2 * 105 calls will be made to insert, remove, and getRandom.
There will be at least one element in the data structure when getRandom is called.
*/



var RandomizedSet = function() {
    this.set = new Set();
    this.array = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.set.has(val)) {
        return false;
    }
    this.set.add(val);
    this.array.push(val);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.set.has(val)) {
        return false;
    }

    const indexToRemove = this.array.indexOf(val);
    const lastVal = this.array[this.array.length - 1];
    this.array[indexToRemove] = lastVal;

    this.set.delete(val);
    this.array.pop();
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    randomValueIndex = Math.floor(Math.random()*this.array.length);
    return this.array[randomValueIndex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
*/

function climbStairs(n) {
    if (n === 1) {
        return 1;
    }

    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    // the number of ways based on the sum of the previous two steps
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

/*
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row
that is either directly below or diagonally left/right. Specifically, the next element from position
(row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

 

Example 1:


Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.
Example 2:


Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is shown.
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 100
-100 <= matrix[i][j] <= 100


*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */function minFallingPathSum(matrix) {
    const n = matrix.length;

    // Copy of the matrix
    const dp = matrix.map(row => row.slice());

    for (let row = 1; row < n; row++) {
        for (let col = 0; col < n; col++) {
            // minimum of the three possible paths from the row above
            dp[row][col] += Math.min(
                dp[row - 1][col - 1] !== undefined ? dp[row - 1][col - 1] : Infinity,
                dp[row - 1][col],
                dp[row - 1][col + 1] !== undefined ? dp[row - 1][col + 1] : Infinity
            );
        }
    }

    return Math.min(...dp[n - 1]);
}
