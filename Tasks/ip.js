// Split string by the first occurrence of separator

parseIP = (input) => {
  result = [];
  if (input === '') return;
  else {
    B = input.split('.');
    if (B.length != 4) return;
    j = 0;
    for (const b of B) {
      result[j] = parseInt(b);
      if (isNaN(result[j])) return;
      j++;
    }
  }
  return result;
};

module.exports = parseIP;
