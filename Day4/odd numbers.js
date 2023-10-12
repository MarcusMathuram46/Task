 //Anonymous function
let printOddNumbers = function(arr) {
    for (let num of arr) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    }
  };

  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
//IIFE
(function(arr) {
    for (let num of arr) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    }
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Arrow Function

let printOddNumbers1 = (arr) => {
    for(let num of arr) {
        if(num % 2 !==0){
            console.log(num);
        }
    }
};

printOddNumbers1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
