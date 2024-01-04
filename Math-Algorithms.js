// 1. Fibonacci sequence - next number is sum of previous 2 , starting with 0 and 1

function fibonacci (n) {
    // Base condition
    if (n < 2) {
        return n;
    }

    // Iterative solution
    let first = 0;
    let second = 1;
    for (let i = 2; i <= n; i++) {
        let temp = first + second;
        first = second;
        second = temp;
        
    }
    
    // another iterative solution using array
    
    let arr = [0, 1];
    
    for(let i=2; i<=n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
}

// Recursive function solution

function fibonacci (n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
The above naive recursive solution has an exponential time complexity (O(2^n)),
which makes it highly inefficient for large values of n. This is because it
recomputes the Fibonacci numbers multiple times, leading to redundant calculations.

To improve efficiency, you might want to use techniques like memoization or
dynamic programming to store and reuse previously computed Fibonacci numbers.
*/

// Recursive solution with memoization

function fibonacci (n, memo) {
    memo = memo || {};
    if (memo[n]) return memo[n];
    if (n < 2) {
        return n;
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}


// 2. Factorial - product of all numbers from 1 to n

function factorial (n) {
    let result = 1;
    
    // Check if n is a non-negative integer
    if (n < 0 || !Number.isInteger(n)) {
        return "Invalid input. Factorial is defined only for non-negative integers.";
    }
    
    // Iterative solution
    for (let i=2; i<=n; i++) {
        result *= i;
    }
    return result;
}

// Recursive solution
function factorial (n) {
    // Check if n is a non-negative integer
    if (n < 0 || !Number.isInteger(n)) {
        return "Invalid input. Factorial is defined only for non-negative integers.";
    }

    if  (n === 0) return 1;

    
    return n * factorial(n - 1);
}

// 3. Prime number - a prime number is a number greaer than 1 and is divisible by 1 and itself only

function isPrime (n) {
    
    // Iterative solution
    if(n < 2) return false;
    
    for (let i=2; i<n; i++) {
        if((n%i === 0)) return false;
    }
    return true;;
}

// Big O = O(n)

// Optimized approach is : 
// integers lager than the square root do not need to be tested becasuse wheneever n=a*b,
// one of th two factors a and b is less than or equal to the squre rooot of n ;

function isPrime (n) {
    
    // Iterative solution
    if(n < 2) return false;
    
    for (let i=2; i<Math.sqrt(n); i++) {
        if((n%i === 0)) return false;
    }
    return true;;
}

// Big O = O(sqrt(n))


// 4. Power of 2 - 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024

function isPowerof2 (n) {
   if (n < 1) return false;
    
   let k = 1;
   while ( k < n ) {
        k *= 2;
   }
    return k === n;

}

// Big O = O(log n) reason is that we are doubling the value of k in each iteration hence dividing the n by 2 in each iteration


// But Power of two can be solved in constant time using bitwise operator

function isPowerOfTwo(n) {
    if (n < 1) return false;
    
    return (n & (n-1)) === 0;
}

// Big O = O(1) - constant time
