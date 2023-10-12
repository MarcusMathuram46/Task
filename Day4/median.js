//Anonymous function
const findMedian = function(arr1, arr2) {
    const combined = [...arr1, ...arr2].sort((a, b) => a - b);
    const middleIndex = Math.floor(combined.length / 2);
    
    if (combined.length % 2 === 0) {
      return (combined[middleIndex - 1] + combined[middleIndex]) / 2;
    } else {
      return combined[middleIndex];
    }
  };
  
  const array1 = [1, 3, 5];
  const array2 = [2, 4, 6];
  console.log(findMedian(array1, array2));


//IIFE
(function(arr1, arr2) {
    const combined = [...arr1, ...arr2].sort((a, b) => a - b);
    const middleIndex = Math.floor(combined.length / 2);
    
    if (combined.length % 2 === 0) {
      console.log((combined[middleIndex - 1] + combined[middleIndex]) / 2);
    } else {
      console.log(combined[middleIndex]);
    }
  })([1, 3, 5], [2, 4, 6]);
  
