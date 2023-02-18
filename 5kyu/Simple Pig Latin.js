// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
    return str.replace(/(\ ?)([a-zA-Z])([a-zA-Z]*?)($|\ )/g, "$1$3$2ay$4");
}