// Return an array without duplicates

duplicateValueInArr = (value, numberOfRepetitions) => {
  if (N <= 0){
    return [];
  }
  else {
    result = [];
    for (let i = 0; i < N; i++) {
      result[i] = value;
    }
    return result;
  }
};

module.exports = duplicateValueInArr;
