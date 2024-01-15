// Reverse an array, you can't use .reverse()
'use strict';
const invertArray = (initialArray) => {
  const reversedArray = Object.keys(initialArray);
  for (let i = 0; i < reversedArray.length; i++) {
    reversedArray[i] = initialArray.pop();
  };
  return reversedArray;
};

module.exports = invertArray;
