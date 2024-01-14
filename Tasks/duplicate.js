// Return an array without duplicates

duplicateValueInArr = (value, numberOfRepetitions) => {
  if (numberOfRepetitions <= 0){
    return [];
  }
  else {
    result = [];
    for (let i = 0; i < numberOfRepetitions; i++) {
      result[i] = value;
    }
    return result;
  }
};

module.exports = duplicateValueInArr;
