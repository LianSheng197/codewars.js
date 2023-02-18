// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(sec) {
    return c = 0, R = ["year", "day", "hour", "minute", "second"], r = "", y = ~~(sec / 31536000), d = ~~((sec - 31536000 * y) / 86400), h = ~~((sec - 31536000 * y - 86400 * d) / 3600), m = ~~((sec - 31536000 * y - 86400 * d - 3600 * h) / 60), s = sec % 60, [y, d, h, m, s].forEach((e, i) => e > 0 && (c == 0 ? (e > 1 ? r += `${e} ${R[i]}s` : r += `${e} ${R[i]}`) : (e > 1 ? r += `, ${e} ${R[i]}s` : r += `, ${e} ${R[i]}`), c++)), sec == 0 ? "now" : r.replace(/,\ (\d+\ [a-z]+)$/, " and $1");
}