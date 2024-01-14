// Sum all number values in dict
'using strict';
const sumAllNumbers = (dict) => {
  let sumOfNumbers = 0;
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  return sumOfNumbers;
};

module.exports = sumAllNumbers;
