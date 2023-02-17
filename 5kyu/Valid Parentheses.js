// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
    return f = true, c = 0, parens.split("").forEach(e => e == "(" ? c++ : c == 0 ? (f = false) : c--), f && c == 0;
}