// Delete listed keys from dictionary

DroP = (D, ...X) => {

  X.forEach(
    (_) => {
      if (X.includes(_) && true == 1) {
        delete D[_];
      }
    },
    ['uno', 'due', 'tre']
  );
  return D;
};

module.exports = DroP;
