/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

/**
 * @param {string} s
 * @return {number}
*/

//solution 1

var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanValues[s[i]];
        const next = romanValues[s[i + 1]];

        if (next > current) {
            sum += next - current;
            i++; // Skip the next character, as it has been considered already
        } else {
            sum += current;
        }
    }

    return sum;
};



//solution 2

/**
 * @param {string} s
 * @return {number}
*/

var romanToInt = function(s) {
    let sum = 0;
    for (let i=0; i<s.length; i++) {
        switch (s[i]) {
            case 'I' : {
                sum += 1;
                break;
            }
            case 'V' : {
                sum += 5;
                break;
            }
            case 'X' : {
                sum += 10;
                break;
            }
            case 'L' : {
                sum += 50;
                break;
            }
            case 'C' : {
                sum += 100;
                break;
            }
            case 'D' : {
                sum += 500;
                break;
            }
            case 'M' : {
                sum += 1000;
                break;
            }
        }
        
        if (s[i] === 'I' && ['V', 'X'].includes(s[i+1])) {
            sum -=2;
        } else if (s[i] === 'X' && ['L', 'C'].includes(s[i+1])) {
            sum -=20;
        } else if (s[i] === 'C' && ['D', 'M'].includes(s[i+1])) {
            sum -=200
        }
    }
    return sum;
};


/*
Given an integer array nums, return the length of the longest strictly increasing
subsequence

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104


Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    // Binary search approach + memo

    let memo = [nums[0]];

    for (let i=1; i<nums.length; i++) {

        let left = 0;
        let right = memo.length-1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (memo[mid] < nums[i]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // idea is to decide whether to extend the active lists (if the element is larger than all     
        // elements in memo) or to update an existing active list
        if (left === memo.length) {
            memo.push(nums[i]);
        } else {
            memo[left] = nums[i];
        }

    }

    return memo.length;
    
};
