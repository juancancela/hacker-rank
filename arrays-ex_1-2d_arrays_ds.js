/**
 * @title 2D Array - DS
 * @problem
 * Given a 6x6 2D Array, arr:
 * 1 1 1 0 0 0
 * 0 1 0 0 0 0
 * 1 1 1 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 
 * @description
 * We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
 * a b c
 *   d
 * e f g
 * 
 * There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for
 * every hourglass in arr, then print the maximum hourglass sum.
 *
 * For example, given the 2D array:
 * -9 -9 -9  1 1 1 
 *  0 -9  0  4 3 2
 * -9 -9 -9  1 2 3
 *  0  0  8  6 6 0
 *  0  0  0 -2 0 0
 *  0  0  1  2 4 0
 * 
 * We calculate the following 16 hourglass values:
 * 
 * -63, -34, -9, 12, 
 * -10,   0, 28, 23, 
 * -27, -11, -2, 10, 
 *   9,  17, 25, 18
 * 
 * Our highest hourglass value is 28 from the hourglass:
 * 
 * 0 4 3
 *   1
 * 8 6 6
 * 
 * Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.
 * 
 * Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.
 * 
 * hourglassSum has the following parameter(s):
 * 
 *   -> arr: an array of integers
 * 
 * @constrains
 * -9 <= arr[i][j]n <= 9
 * 0 <= i,j <= 5
 * 
 * @outputFormat
 * Print the largest (maximum) hourglass sum found in arr.
 * 
 * @sampleInput
 * Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].
 * 
 * @sampleOutput
 * 19
 * 
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
