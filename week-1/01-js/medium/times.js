
/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let sum = 0;
    let before = (new Date()).getTime();
    for(let i=1;i<=n;i++){
        sum +=i;
    }
    let after = (new Date()).getTime();
    return after-before;
}

let result1 = calculateTime(100);
console.log(result1);
let result2 = calculateTime(100000);
console.log(result2);
let result3 = calculateTime(1000000000);
console.log(result3);

