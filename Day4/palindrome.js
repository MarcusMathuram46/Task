//Anonymous function
const findPalindromes = function(arr) {
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  return arr.filter(str => isPalindrome(str));
};

const wordsArray = ["hi", "hello", "welcome", "world"];
console.log(findPalindromes(wordsArray));


//IIFE

(function(arr) {
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  const palindromeWords = arr.filter(str => isPalindrome(str));
  console.log(palindromeWords);
})(["hi", "hello", "welcome", "world"]);

//Arrow Function
const findPalindromes1 = (arr) => {
  const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  };

  return arr.filter(str => isPalindrome(str));
};

const wordsArray1 = ["hi", "hello", "welcome", "world"];
console.log(findPalindromes1(wordsArray1));
