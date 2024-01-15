// Reverse an array, you can't use .reverse()

invertArray = (initialArray) => {
  reversedArray = Object.keys(initialArray);
  reversedArray.forEach((i) => {
    reversedArray[i] = initialArray.pop();
  });
  return reversedArray;
};

module.exports = invertArray;
