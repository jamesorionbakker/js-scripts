function arabic(str) {
    //init new array for arabic versions of roman numerals
    let arabicArr = [];
    //loop through roman numberal string, convert numerals to arabic numbers and add to arabicArr
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'I') {arabicArr[i] = 1
        } else if (str[i] === 'V') {arabicArr[i] = 5
        } else if (str[i] === 'X') {arabicArr[i] = 10
        } else if (str[i] === 'L') {arabicArr[i] = 50
        } else if (str[i] === 'C') {arabicArr[i] = 100
        } else if (str[i] === 'D') {arabicArr[i] = 500
        } else if (str[i] === 'M') {arabicArr[i] = 1000
        } else {
            //if invalid char is found abort and reurn error
            return 'Error: Non roman numeral was used'
        };
    }
    //init running total
    let total = 0;
    //if only on character is present return it
    if (arabicArr.length == 1) {
        return arabicArr[0]
    };

    //init variable for temp value
    let charVal = 0;

    //loop through each value of array
    for (i = 0; i < arabicArr.length; i++) {

        //if next value in array is larger than current, subtract current from next and increment loop +1 to skip next.  Assign current value - next value to charVal
        if (arabicArr[i] < arabicArr[i + 1]) {
            charVal = arabicArr[i + 1] - arabicArr[i];
            i++;
        } else {
            // if next value is greater than or equal to, assign current value to charVal
            charVal = arabicArr[i];
        }
        //increment running total by value of charVal
        total += charVal
    }
    return total;
}


let result = arabic('MMXX');
console.log(result);
