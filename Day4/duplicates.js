//Anonymous function
const removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  };
  
  const originalArray = [1, 2, 2, 3, 4, 4, 5, 6, 7, 6, 8];
  console.log(removeDuplicates(originalArray));



//IIFE

(function(arr) {
    const uniqueArray = arr.filter((value, index, self) => self.indexOf(value) === index);
    console.log(uniqueArray);
  })([1, 2, 2, 3, 4, 4, 5, 6, 7, 6, 8]);
  