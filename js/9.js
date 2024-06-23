// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// function XO(str) {
//     let countCharX = 0;
//     let countCharO = 0;

//     for (const char of str.toLowerCase()) {
//         if ( char === "o") {
//             ++countCharO
//         } else if (char === "x") {
//             ++countCharX
//         } 
//     }

//     if(countCharO === 0  && countCharX === 0) {
//         return true
//     }

//     return countCharO === countCharX;
// }


const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
console.log(XO("zpzpzpp"))
console.log(XO("zzoo"))
