// Find an intersection of two dictionaries
'use strict';
const dictsIntersection = (firstDict, secondDict) => {
  const firstDictKeys = Object.keys(firstDict);
  for (const attribute_name of firstDictKeys) {
    if (firstDict[attribute_name] === secondDict[attribute_name]) {
      secondDict[attribute_name] = firstDict[attribute_name];
    } else {
      delete firstDict[attribute_name];
    }
  }
  return firstDict;
};

module.exports = dictsIntersection;
