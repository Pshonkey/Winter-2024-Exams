// Copy only listed values from dict

copyOnlyListedValues = (dict, ...listedValues) => {
  Object.keys(dict).forEach((key) => {
    if (!listedValues.includes(key)) {
      delete dict[key];
    }
  });
  return dict;
};

module.exports = copyOnlyListedValues;
