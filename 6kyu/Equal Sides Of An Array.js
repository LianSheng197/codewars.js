// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
    return c = 0, f = -1, s = arr.reduce((a, b) => a + b, 0), arr.forEach((e, i) => c == (s - e) / 2 ? f < 0 ? (f = i) : f : (c += e)), f;
}