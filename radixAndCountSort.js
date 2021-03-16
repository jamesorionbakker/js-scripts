'use strict'

function counterSort(input) {
    let output = [];
    let counter = [];
    input.forEach((value) => {
        if (!counter[value]) {
            counter[value] = 1
        } else {
            counter[value]++
        }
    });
    counter.forEach((count, i) => {
        while (count > 0) {
            output.push(i);
            count--;
        }
    });
    return output;
}

function radixBucketSort(input) {
    let output = [];
    output.push(...input);
    let max = Math.max(...output);
    let places = parseInt(max.toString().length);
    const buckets = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
    }
    for (let i = 0; i < places; i++) {
        output.forEach((val) => {
            buckets[getNthDigit(val, i)].push(val);
        })
        let index = 0;
        for (let i = 0; i < 10; i++) {
            buckets[i].forEach((val) => {
                output[index] = val;
                index++;
            })
            buckets[i] = [];
        }
    }
    return output;
}

function radixSort(input) {
    let output = [ [...input], [] ];
    let max = Math.max(...input);
    let maxDigits = parseInt(max.toString().length);
    for (var i = 0; i < maxDigits; i++) { //count occurances of n digit and increment counter array
        let counter = [0,0,0,0,0,0,0,0,0,0]
        output[i % 2].forEach((val) => {
            let digit = getNthDigit(val, i);
            counter[digit] ++;
        })
        let prefixSum = 0;
        counter.forEach((val,i) => { //convert counter array to prefix sum array
            prefixSum += val;
            counter[i] = prefixSum -1;
        })
        for(let j=input.length - 1; j >= 0; j--){ //sort values to alternate output array
            let val = output[i % 2][j]
            let digit = getNthDigit(val, i);
            output[(i + 1) % 2][counter[digit]] =  val;
            counter[digit]--;
        }
    }
    return output[i % 2];
}

function getNthDigit(num, digit) {
    return Math.floor(num / 10 ** digit) % 10;
}

//create array of random numbers
let array = [];
for (let i = 0; i < 50; i++) {
    array.push(Math.floor(Math.random() * 100));
}

//run sorts
console.table(counterSort(array));
console.table(radixBucketSort(array));
console.table(radixSort(array));