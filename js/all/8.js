function sumArray(array) {
    if (array === null || array === undefined || array.length < 2 ) {
        return 0;
    }
    let indexMax = array.indexOf(Math.max(...array));
    array.splice(indexMax, 1)
    let indexMin = array.indexOf(Math.min(...array));
    array.splice(indexMin, 1)
    return array.reduce((a, b) => a + b, 0)
}


console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));