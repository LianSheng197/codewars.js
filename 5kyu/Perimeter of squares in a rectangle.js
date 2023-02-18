// https://www.codewars.com/kata/559a28007caad2ac4e000083

function perimeter(n) {
    return a = [1, 1], (f = _ => a.push(a[a.length - 1] + a[a.length - 2])), (g = _ => n + 1 > a.length && (f(), g()))(), n == 0 ? 4 : a.reduce((x, y) => x + y, 0) * 4;
}