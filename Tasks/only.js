// Copy only listed values from dict
'use strict';
const copyOnlyListedValues = (dict, ...listedValues) => {
  for (const key in dict) {
    if (!listedValues.includes(key)) {
      delete dict[key];
    }
  }
  return dict;
};

module.exports = copyOnlyListedValues;
