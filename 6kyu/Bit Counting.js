// https://www.codewars.com/kata/526571aae218b8ee490006f4

function countBits(n) {
    return s = n.toString(2), s.length - s.replace(/1/g, "").length;
}