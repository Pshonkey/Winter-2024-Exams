// Reverse an array, you can't use .reverse()

invert = (A) => {
  T = Object.keys(A);
  T.forEach((i) => {
    T[i] = A.pop();
    ((x) => {
      return x;
    });
  });
  return T;
};

module.exports = invert;
