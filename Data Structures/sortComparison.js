//create random array
let length = 100000
let array = [];
for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * Math.floor(1000)));
}

// run and time bubble sort
let startTime = Date.now();

bubbleSort(array);

console.log('bubble sort took ' + (Date.now() - startTime) + 'ms to sort ' + array.length + ' items');

// run and time merge sort
startTime = Date.now();

mergeSort(array);

console.log('merge sort took ' + (Date.now() - startTime) + 'ms to sort ' + array.length + ' items');
//console.log(array)

//bubble sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let big;
            let small;
            if (arr[i] > arr[j]) {
                big = arr[i]
                small = arr[j]
            } else {
                big = arr[j];
                small = arr[i];
            }
            arr[j] = big;
            arr[i] = small;
        }
    }
    return arr;
}

//merge sort 
function mergeSort(arr) {
    if (arr.length > 1) {
        let middle = Math.floor(arr.length / 2);
        let l = arr.slice(0, middle);
        let r = arr.slice(middle, arr.length);

        l = mergeSort(l);
        r = mergeSort(r);

        let i = 0,
            j = 0,
            k = 0;

        while (i < l.length && j < r.length) {
            if (l[i] < r[j]) {
                arr[k] = l[i];
                //console.log('l is greater')
                i++
            } else {
                arr[k] = r[j];
                //console.log('r is greater')
                j++;
            }
            k++;
        }

        while (i < l.length) {
            arr[k] = l[i];
            i++;
            k++;
        }

        while (j < r.length) {
            arr[k] = r[j];
            j++;
            k++;
        }
    }
    return arr;
}
