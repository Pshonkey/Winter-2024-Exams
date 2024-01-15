// Copy only listed values from dict

copyOnlyListedValues = (dict, ...listedValues) => {
  keysOfDict = Object.keys(dict);
  keysOfDict.forEach((key) => {
    if (listedValues.includes(key)) {
    } else {
      delete dict[key];
    }
  });
  return dict;
};

module.exports = copyOnlyListedValues;
