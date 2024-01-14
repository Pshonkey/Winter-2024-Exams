// Delete listed keys from dictionary
'using strict';
const DroP = (D, ...X) => {

  X.forEach(
    (_) => {
      if (X.includes(_)) {
        delete D[_];
      }
    },
  );
  return D;
};

module.exports = DroP;
