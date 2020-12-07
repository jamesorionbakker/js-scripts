function parseFirstInt(str) {
  let numString = 'NaN';
  let weHaveANumber = false;

  for (i = 0; i < str.length; i++) {
    let currentInt = parseInt(str[i]);
    if (Number.isNaN(currentInt) == false || str[i] == '-') {
      if (numString === 'NaN') {
        numString = str[i];
        weHaveANumber = true;
      } else {
        numString += currentInt;
      }
    } else if (weHaveANumber) {
      break;
    }
  }
  return parseInt(numString);
}

let result = parseFirstInt('The only winner in the War of -18.12 was Tchaikovsky.');
console.log(result);
