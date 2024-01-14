// Sum all number values in dict
'using strict';
const sumAllNumbers = (dict) => {
  let sumOfNumbers = 0;
  const keys = Object.keys(dict);
  for (const key of keys) {
    const value = dict[key];
    if (typeof value === 'number') {
      sumOfNumbers += value;
    }
  };
  return sumOfNumbers;
};

module.exports = sumAllNumbers;
