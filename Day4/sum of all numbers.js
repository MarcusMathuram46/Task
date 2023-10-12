//Anonymous function
const calculateSum = function(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  };
  
  const numbersArray = [1, 2, 3, 4, 5];
  console.log(calculateSum(numbersArray));
  

//IIFE

(function(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    console.log(sum);
  })([1, 2, 3, 4, 5]);



//Arrow Function
const calculateSum1 = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
  };
  
  const numbersArray1 = [1, 2, 3, 4, 5];
  console.log(calculateSum1(numbersArray1));
  