// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
    return value.toString().split("").reduce((a, b, _, c) => a + b ** c.length, 0) == value;
}