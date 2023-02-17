// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
    return a = array.slice().filter(e => e % 2 != 0).sort((a, b) => a - b), array.map(e => e % 2 != 0 ? a.shift() : e);
}