// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
    return c = 0, f = x => (y = x.toString().split("").reduce((a, b) => a * b, 1), c++, y < 10 ? y : f(y)), num < 10 ? 0 : f(num), c;
}