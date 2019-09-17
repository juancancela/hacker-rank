/**
 * @title 2D Array - DS
 * @statement check arrays-ex_1-2d_arrays_ds.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function hourglassSum(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            const row1 = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            const row2 = arr[i + 1][j + 1];
            const row3 = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            let total = row1 + row2 + row3;
            if (total > max) max = total;
        }
    }
    return max;
}

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

const arr2 = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
]
console.log(hourglassSum(arr2));
