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
