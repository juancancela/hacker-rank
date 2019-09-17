/**
 * @title Diagonal Difference
 * @statement check challenges-diagonal_difference.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */

function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        leftDiagonal += arr[i][leftIndex];
        rightDiagonal += arr[i][rightIndex];
        ++leftIndex;
        --rightIndex;
    };
    return Math.abs(leftDiagonal - rightDiagonal);
};

//Example
const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
console.log(diagonalDifference(arr));