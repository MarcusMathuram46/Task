//Anonymous function
const findPrimeNumbers = function(arr) {
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    
    return arr.filter(num => isPrime(num));
  };
  
  const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9];
  console.log(findPrimeNumbers(numbersArray));


//IIFE

(function(arr) {
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    
    let primeNumbers = arr.filter(num => isPrime(num));
    console.log(primeNumbers);
  })([2, 3, 4, 5, 6, 7, 8, 9]);
  


//Arrow Function
const findPrimeNumbers1 = (arr) => {
    const isPrime = num => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    
    return arr.filter(num => isPrime(num));
  };
  
  const numbersArray1 = [2, 3, 4, 5, 6, 7, 8, 9];
  console.log(findPrimeNumbers1(numbersArray1));
  