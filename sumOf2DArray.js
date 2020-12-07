function sum(a) {
    let sum = 0;
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a[i].length; j++) {
            sum += a[i][j];
        }
    }
    return sum;

}

let result = sum([[1, 2,100,2000,50,12,1234,6,5,2,22,], [3, 4, 5]])
console.log(result);
