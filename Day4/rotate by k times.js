//Anonymous function
const rotateArray = function(arr, k) {
    k %= arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
  };
  
  const originalArray = [1, 2, 3, 4, 5];
  const rotations = 2;
  console.log(rotateArray(originalArray, rotations));
  

//IIFE

(function(arr, k) {
    k %= arr.length;
    console.log(arr.slice(-k).concat(arr.slice(0, -k)));
  })([1, 2, 3, 4, 5], 2);
  