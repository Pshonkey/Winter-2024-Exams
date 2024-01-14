// Return an array without duplicates
'use strict';
const duplicateValueInArr = (value, numberOfRepetitions) => {
  if (numberOfRepetitions <= 0){
    return [];
  }
    let result = [];
    for (let i = 0; i < numberOfRepetitions; i++) {
      result[i] = value;
    }
    return result;
};

module.exports = duplicateValueInArr;
