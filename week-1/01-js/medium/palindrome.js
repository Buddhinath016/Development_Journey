/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let strLower = str.toLowerCase();
  let maxLength = strLower.length;

  for(let i=0;i<maxLength/2;i++){
    if(strLower[i] != strLower[maxLength-1]){
      return false;
    }
    else{
      maxLength -=1;
    }
  }
  return true;
}

let result = isPalindrome("Nan");
console.log(result);
  // module.exports = isPalindrome;