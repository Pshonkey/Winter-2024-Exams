// Find an intersection of two dictionaries
'use strict';
const dictsIntersection = (firstDict, secondDict) => {
  const firstDictKeys = Object.keys(firstDict);
    for (const attributeName of firstDictKeys) {
    if (firstDict[attributeName] !== secondDict[attributeName]) {
      delete firstDict[attributeName];
    }
  }
  return firstDict;
};

module.exports = dictsIntersection;
