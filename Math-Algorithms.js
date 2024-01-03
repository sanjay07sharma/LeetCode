// 1. Fibonacci sequence - next number is sum of previous 2 , starting with 0 and 1

function fibonacci (n) {
    // Base condition
    if (n < 2) {
        return n;
    }
    // Recursive function solution
    
    
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


// 2. Factorial - product of all numbers from 1 to n

function factorial (n) {
    let result = 1;
    
    // Iterative solution
    for (let i=2; i<=n; i++) {
        result *= i;
    }
    return result;
    
    // Recursive solution : 
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
