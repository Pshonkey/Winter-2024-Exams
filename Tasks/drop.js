// Delete listed keys from dictionary
'using strict';
const dropKeys = (dictionary, ...keysToDelete) => {
  keysToDelete.forEach(
    (_) => {
      if (keysToDelete.includes(_)) {
        delete dictionary[_];
      }
    },
  );
  return dictionary;
};

module.exports = dropKeys;
