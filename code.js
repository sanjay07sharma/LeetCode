/*

You have n dice, and each die has k faces numbered from 1 to k.

Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 109 + 7.

 

Example 1:

Input: n = 1, k = 6, target = 3
Output: 1
Explanation: You throw one die with 6 faces.
There is only one way to get a sum of 3.
Example 2:

Input: n = 2, k = 6, target = 7
Output: 6
Explanation: You throw two dice, each with 6 faces.
There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.
Example 3:

Input: n = 30, k = 30, target = 500
Output: 222616187
Explanation: The answer must be returned modulo 109 + 7.

Constraints:

1 <= n, k <= 30
1 <= target <= 1000

/**
 * @param {number} n,k,target
 * @return {number}
 */
var MOD = 1_000_000_007;

var numRollsToTarget = function(n, k, target) {
    // concept of memoization + recursion is used to store the results of the subproblems
    // so that we do not have to recalculate them when needed later.
    // fill the memo array with -1.
	const memo = Array(n + 1).fill(-1).map(x => Array(target + 1).fill(-1));
	return calculateRolls(n, k, target, memo);
};

var calculateRolls = function(n, k, target, memo) {
	if (n === 0 || target < 0)
		return target === 0 ? 1 : 0;

	if (memo[n][target] !== -1)
			return memo[n][target];

	let ways = 0;

    // iterate through each face of the die (i from 1 to k).
	for (let i = 1; i <= k; i++)
		ways = (ways + calculateRolls(n - 1, k, target - i, memo)) % MOD;

	return memo[n][target] = ways;
};
