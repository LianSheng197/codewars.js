// https://www.codewars.com/kata/540afbe2dc9f615d5e000425

class Sudoku {
    /**
     * @param {number[][]} array2d 
     */
    constructor(array2d) {
        this.map = array2d;
        this.size = -1;
        this.n = -1;
    }

    #checkSize() {
        const size = this.map.length ** 0.5;

        if (size > 0 && Number.isInteger(size)) {
            this.size = size;
            this.n = this.map.length;
            return true;
        } else {
            return false;
        }
    }

    #checkIntegrity() {
        for (let i = 0; i < this.size; i++) {
            if (this.map[i].length != this.n) {
                return false;
            }

            for (let j = 0; j < this.n; j++) {
                const c = this.map[i][j];

                if (!(Number.isInteger(c) && c >= 1 && c <= this.n)) {
                    return false;
                }
            }
        }

        return true;
    }

    #checkRow() {
        for (let i = 0; i < this.n; i++) {
            const template = [...Array(this.n).keys()].map(e => e + 1);

            for (let j = 0; j < this.n; j++) {
                const c = this.map[i][j];
                const index = template.indexOf(c);

                if (index > -1) {
                    template.splice(index, 1);
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    #checkColumn() {
        for (let i = 0; i < this.n; i++) {
            const template = [...Array(this.n).keys()].map(e => e + 1);

            for (let j = 0; j < this.n; j++) {
                const c = this.map[j][i];
                const index = template.indexOf(c);

                if (index > -1) {
                    template.splice(index, 1);
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    #checkCell() {
        for (let sRow = 0; sRow < this.size; sRow++) {
            for (let sColumn = 0; sColumn < this.size; sColumn++) {
                const template = [...Array(this.n).keys()].map(e => e + 1);

                for (let i = 0; i < this.size; i++) {

                    for (let j = 0; j < this.size; j++) {
                        const c = this.map[sRow * this.size + i][sColumn * this.size + j];
                        const index = template.indexOf(c);

                        if (index > -1) {
                            template.splice(index, 1);
                        } else {
                            return false;
                        }
                    }
                }
            }
        }

        return true;
    }

    #check() {
        return this.#checkSize() && this.#checkIntegrity() && this.#checkRow() && this.#checkColumn() && this.#checkCell();
    }

    isValid() {
        return this.#check();
    }
}

const goodSudoku1 = new Sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
]);

const goodSudoku2 = new Sudoku([
    [1, 4, 2, 3],
    [3, 2, 4, 1],

    [4, 1, 3, 2],
    [2, 3, 1, 4]
]);

const badSudoku1 = new Sudoku([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],

    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],

    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
]);

const badSudoku2 = new Sudoku([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1]
]);

const more1 = new Sudoku([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
])

console.log(goodSudoku1.isValid());
console.log(goodSudoku2.isValid());
console.log(badSudoku1.isValid());
console.log(badSudoku2.isValid());
console.log(more1.isValid());