//Anonymous function
const convertToTitleCaps = function(arr) {
    let titleCapsArray = [];
    for (let str of arr) {
      titleCapsArray.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    }
    return titleCapsArray;
  };
  
  const inputArray = ["hello", "world", "javascript"];
  console.log(convertToTitleCaps(inputArray));


//IIFE

(function(arr) {
    let titleCapsArray = [];
    for (let str of arr) {
      titleCapsArray.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    }
    console.log(titleCapsArray);
  })(["hello", "world", "javascript"]);
  

//Arrow Function
const convertToTitleCaps1 = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  
  const inputArray1 = ["hello", "world", "javascript"];
  console.log(convertToTitleCaps1(inputArray1));
  