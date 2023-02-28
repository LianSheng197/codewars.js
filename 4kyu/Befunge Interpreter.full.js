// https://www.codewars.com/kata/526c7b931666d07889000a3c
// 
// 這題描述的東西 (Befunge-93) 我從未看過
// 由於我一向對 esolang 很感興趣
// 所以這題我想要留下一個完整的解答而非單行解。

/**
 * @param {string} code 
 */
function interpret(code) {
    const ROW_SIZE = code.split("\n").sort((a, b) => b.length - a.length)[0].length;
    //          [>,  <,         ^,        v] 
    const dir = [1, -1, -ROW_SIZE, ROW_SIZE];
    const stack = [];
    let currentDirection = 0;
    let i = 0;
    let isStringMode = false;
    let result = "";

    // Make rectangle
    code = code.split("\n").map(e => (e += " ".repeat(ROW_SIZE - e.length))).join("").split("");

    function move() {
        i += dir[currentDirection];
    }

    function top() {
        return stack.length > 0 ? stack[stack.length - 1] : null;
    }

    function pop() {
        return stack.pop();
    }

    function push(data) {
        stack.push(data);
    }

    function put(x, y, v) {
        code[x + y * ROW_SIZE] = String.fromCharCode(v);
    }

    function get(x, y) {
        push(("" + code[x + y * ROW_SIZE]).charCodeAt(0));
    }

    function output() {
        const x = stack.pop();
        result += x;
    }

    function outputChar() {
        const x = stack.pop();
        result += String.fromCharCode(x);
    }


    while (true) {
        const cursor = code[i];

        if (isStringMode === false) {
            if ("0123456789".includes(cursor)) {
                // Push this number on the stack
                push(cursor - 0);
            } else if (cursor == "+") {
                // Addition: Pop a and b, then push a+b
                const a = pop();
                const b = pop();
                push(a + b);
            } else if (cursor == "-") {
                // Subtraction: Pop a and b, then push b-a
                const a = pop();
                const b = pop();
                push(b - a);
            } else if (cursor == "*") {
                // Multiplication: Pop a and b, then push a*b
                const a = pop();
                const b = pop();
                push(a * b);
            } else if (cursor == "/") {
                // Integer division: Pop a and b, then push b/a, rounded down. If a is zero, push zero.
                const a = pop();
                const b = pop();
                push(a == 0 ? 0 : b / a);
            } else if (cursor == "%") {
                // Modulo: Pop a and b, then push the remainder of the integer division of b/a.
                const a = pop();
                const b = pop();
                push(a == 0 ? 0 : b % a);
            } else if (cursor == "!") {
                // Logical NOT: Pop a value. If the value is zero, push 1; otherwise, push zero.
                const x = pop();
                push(x == 0 ? 1 : 0);
            } else if (cursor == "`") {
                // Greater than: Pop a and b, then push 1 if b>a, otherwise zero.
                const a = pop();
                const b = pop();
                push(b > a ? 1 : 0);
            } else if (cursor == ">") {
                // Start moving right
                currentDirection = 0;
            } else if (cursor == "<") {
                // Start moving left
                currentDirection = 1;
            } else if (cursor == "^") {
                // Start moving up
                currentDirection = 2;
            } else if (cursor == "v") {
                // Start moving down
                currentDirection = 3;
            } else if (cursor == "?") {
                // Start moving in a random cardinal direction
                currentDirection = Math.floor(Math.random() * 4);
            } else if (cursor == "_") {
                // Pop a value; move right if value=0, left otherwise
                const x = pop();
                currentDirection = x == 0 ? 0 : 1;
            } else if (cursor == "|") {
                // Pop a value; move down if value=0, up otherwise
                const x = pop();
                currentDirection = x == 0 ? 3 : 2;
            } else if (cursor == "\"") {
                // Start string mode: push each character's ASCII value all the way up to the next "
                isStringMode = true;
            } else if (cursor == ":") {
                // Duplicate value on top of the stack. If there is nothing on top of the stack, push a 0
                const x = top();
                push(x ? x : 0)
            } else if (cursor == "\\") {
                // Swap two values on top of the stack
                const a = pop();
                const b = pop();
                push(a);
                push(b);
            } else if (cursor == "$") {
                // Pop value from the stack and discard it
                pop();
            } else if (cursor == ".") {
                // Pop value and output as an integer followed by a space
                output();
            } else if (cursor == ",") {
                // Pop value and output as ASCII character
                outputChar();
            } else if (cursor == "#") {
                // Bridge: Skip next cell
                move();
            } else if (cursor == "p") {
                // A "put" call (a way to store a value for later use). Pop y, x, and v, then change the character at (x,y) in the program to the character with ASCII value v
                const y = pop();
                const x = pop();
                const v = pop();
                put(x, y, v);
            } else if (cursor == "g") {
                // A "get" call (a way to retrieve data in storage). Pop y and x, then push ASCII value of the character at that position in the program
                const y = pop();
                const x = pop();
                get(x, y);
            } else if (cursor == "@") {
                // End program
                break;
            } else if (cursor == " ") {
                // No-op. Does nothing
            }
        } else {
            if (cursor == "\"") {
                isStringMode = false;
            } else {
                push(cursor.charCodeAt(0));
            }
        }

        move();
    }

    return result;
}

// 123456789
console.log(interpret('>987v>.v\nv456<  :\n>321 ^ _@'));

// Hello, world!
console.log(interpret(' >25*"!dlrow ,olleH":v\n                  v:,_@\n                  >  ^'));

// Hello World!
console.log(interpret('>              v\nv  ,,,,,"Hello"<\n>48*,          v\nv,,,,,,"World!"<\n>25*,@'));

// 40320
console.log(interpret('08>:1-:v v *_$.@ \n  ^    _$>\\:^'));

// 01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@
console.log(interpret('01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@'));

// 23571113171923293137
console.log(interpret('2>:3g" "-!v\\  g30          <\n |!`"&":+1_:.:03p>03g+:"&"`|\n @               ^  p3\\" ":<\n2 2345678901234567890123456789012345678'));