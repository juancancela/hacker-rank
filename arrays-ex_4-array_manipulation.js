/**
 * @title Array Manipulation
 * @problem
 * 
 * Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value
 * to each of the array element between two given indices, inclusive. Once all operations have been
 * performed, return the maximum value in your array.
 * 
 * For example, the length of your array of zeros n=10. Your list of queries is as follows:
 * 
 *   a b k
 *   1 5 3
 *   4 8 7
 *   6 9 1
 * 
 * Add the values of k between the indices a and b inclusive:
 * 
 * index->	 1 2 3  4  5 6 7 8 9 10
 *	        [0,0,0, 0, 0,0,0,0,0, 0]
 *	        [3,3,3, 3, 3,0,0,0,0, 0]
 *	        [3,3,3,10,10,7,7,7,0, 0]
 *	        [3,3,3,10,10,8,8,8,1, 0]
 *
 * The largest value is  after all operations are performed.
 * 
 * @description
 * Complete the function arrayManipulation in the editor below. It must return an integer, the maximum
 * value in the resulting array.
 *
 * arrayManipulation has the following parameters:
 *   n - the number of elements in your array
 *   queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, 
 *             and k.
 * 
 * @inputFormat
 * The first line contains two space-separated integers n and m, the size of the array and the number of
 * operations.
 * Each of the next m lines contains three space-separated integers a, b and k, the left index, right index and summand.
 * 
 * @constrains
 * 3 <= n <= 10pow7
 * 1 <= m <= 2 * 10pow5
 * 1 <= a <= b <= n
 * 0 <= k <= 10pow9
 * 
 * @outputFormat
 * Return the integer maximum value in the finished array.
 * 
 * @sampleInput
 * 5 3
 * 1 2 100
 * 2 5 100
 * 3 4 100
 * 
 * @sampleOutput
 * 200
 * 
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