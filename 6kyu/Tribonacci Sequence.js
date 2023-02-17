// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
    return a = signature.slice(0), new Array(n).fill(0).forEach(_ => a.push(a[a.length - 1] + (a[a.length - 2] || 0) + (a[a.length - 3] || 0))), a.slice(0, n), a.slice(0, n);
}