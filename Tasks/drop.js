// Delete listed keys from dictionary
'use strict';
const dropKeys = (dictionary, ...keysToDelete) => {
  for(const key of keysToDelete) {
      if (dictionary.hasOwnProperty(key)) {
        delete dictionary[key];
      }
    }
  return dictionary;
};

module.exports = dropKeys;
