/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let count = 0;
  let str1Array = [];
  let str2Array = [];

  if(str1.length == str2.length){

    for(let k=0;k<str1.length;k++){
      str1Array.push(str1.charAt(k));
      str2Array.push(str2.charAt(k));
    }

    str1Array.sort();
    str2Array.sort();

    for(let i=0;i<str1Array.length;i++){
      if(str1Array[i] != str2Array[i]){
        return false;
      }
    }
    return true;
  }
  else{
    return false;
  }
}

let result = isAnagram("spart","trasp");
console.log(result);
// module.exports = isAnagram;