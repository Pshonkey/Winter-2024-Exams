// Count types in an array
'use strict';
const countTypes = function (inputArray) {
  const typesInArray = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const key of inputArray) {
    const type = typeof key;
    typesInArray[type]++;
  }
  return typesInArray;
};

module.exports = countTypes;
