// Return an array without duplicates
'use strict';
const duplicateValueInArr = (value, numberOfReps) => {
  if (numberOfReps <= 0){
    return [];
  }
    let result = [];
    for (let i = 0; i < numberOfReps; i++) {
      result[i] = value;
    }
    return result;
};

module.exports = duplicateValueInArr;
