// Reverse an array, you can't use .reverse()
'use strict';
const invertArray = (initialArray) => {
  const reversedArray = Object.keys(initialArray);
  reversedArray.forEach((i) => {
    reversedArray[i] = initialArray.pop();
  });
  return reversedArray;
};

module.exports = invertArray;
