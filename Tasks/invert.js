// Reverse an array, you can't use .reverse()

invert = (A) => {
  T = Object.keys(A);
  T.forEach((i) => {
    T[i] = A.pop();
  });
  return T;
};

module.exports = invert;
