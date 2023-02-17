// https://www.codewars.com/kata/54b724efac3d5402db00065e

function decodeMorse(morseCode) {
    return morseCode.trim().split(" ").map(r => r == "" ? "[" : MORSE_CODE[r]).join("").replace(/\[\[/g, " ");
}