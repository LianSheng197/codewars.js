// https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a, b, c) {
    return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
}