/**
 * @title Array Manipulation
 * @statement check arrays-ex_4-array_manipulation.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function arrayManipulation(n, queries) {
    let max = Number.MIN_SAFE_INTEGER;
    let arr = Array(n).fill(0);
    for (let i = 0; i < queries.length; i++) {
        const a = queries[i][0];
        const b = queries[i][1];
        const k = queries[i][2];
        arr[a - 1] += k;
        if (b < arr.length) arr[b] -= k;
    };
    for (let j = 1; j < n; j++) arr[j] += arr[j - 1];
    for (let k = 0; k < arr.length; k++) max = Math.max(max, arr[k]);
    return max;
}