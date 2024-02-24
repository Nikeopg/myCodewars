
function spinWords(string) {
    return string.split(" ").map(word => {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}



console.log(spinWords("Just gniddik there is still one more"));

console.assert(spinWords("Hey fellow warriors") === "Hey wollef sroirraw");
console.assert(spinWords("This is a test") === "This is a test");
console.assert(spinWords("This is another test") === "This is rehtona test");


