function roman(num) {
  let romVals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let iq;
  let roman = '';

  for (i in romVals) {
    while (num >= romVals[i]) {
      roman += i;
      num -= romVals[i];
    }

  }
  return roman;

}



let result = roman(2020);
console.log(result);
