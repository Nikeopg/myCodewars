function findOutlier(integers) {
    let checkStart = integers.slice(0, 3).filter(num => num % 2 === 0);
    let isEven = checkStart.length >= 2;

    return integers.find(num => (isEven ? num % 2 !== 0 : num % 2 == 0)
    );
}


console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([2, 6, 8, 10, 12, 3]));

