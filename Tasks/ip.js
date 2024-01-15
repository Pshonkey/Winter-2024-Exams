// Split string by the first occurrence of separator
'use strict';
const parseIP = (input) => {
  const result = [];
  if (input === '') { 
    return;
  }
  const ipLength = 4;
  const splittedArray = input.split('.');
  if (splittedArray.length != ipLength) { 
    return;
  }
  let j = 0;
  for (const key of splittedArray) {
    result[j] = parseInt(key);
    if (isNaN(result[j])) return;
    j++;
  }
return result;
};

module.exports = parseIP;
