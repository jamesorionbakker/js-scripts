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
  let i;
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

/// for each using Object.Key

function a2r(num) {
  let roman = '';
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
  Object.keys(romVals).forEach(key => {
    while (num >= romVals[key]) {
      num -= romVals[key];
      roman += key;
    }
  });
  return roman;
}

let result = a2r(111);
console.log(result);
