// Split string by the first occurrence of separator

parseIP = (input) => {
  result = [];
  if (input === '') return;
  else {
    splittedArray = input.split('.');
    if (splittedArray.length != 4) return;
    j = 0;
    for (const key of splittedArray) {
      result[j] = parseInt(key);
      if (isNaN(result[j])) return;
      j++;
    }
  }
  return result;
};

module.exports = parseIP;
