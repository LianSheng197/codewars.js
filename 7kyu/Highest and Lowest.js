// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
    return a = numbers.split(" ").map(r => r - 0).sort((a, b) => b - a), `${a[0]} ${a[a.length - 1]}`;
}