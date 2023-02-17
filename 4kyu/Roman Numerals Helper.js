// https://www.codewars.com/kata/51b66044bce5799a7f000003

class RomanNumerals {
    static R = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    static V = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    static toRoman(num) {
        return this.r = "", this.f = (x, i) => num >= x && (this.r += this.R[i], num -= x, this.f(x, i)), this.V.forEach(this.f), this.r;
    }

    static fromRoman(str) {
        return this.r = 0, this.f = (x, i) => str.startsWith(x) && (this.r += this.V[i], str = str.substring(x.length), this.f(x, i)), this.R.forEach(this.f), this.r;
    }
}