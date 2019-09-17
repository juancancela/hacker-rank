/**
 * @title 2D Array - DS
 * @problem
 * A left rotation operation on an array shifts each of the array's elements 1 unit to the left. 
 * For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].
 * 
 * Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated
 * array to be printed as a single line of space-separated integers.
 * 
 * @description
 * Complete the function rotLeft in the editor below. It should return the resulting array of integers.
 *
 * rotLeft has the following parameter(s):
 *    -> An array of integers a.
 *    -> An integer d, the number of rotations.
 * 
 * @constrains
 * 1 <= n <= 10pow5
 * 1 <= d <= n
 * 1 <= a[i] <= 10pow6
 * 
 * @outputFormat
 * Print a single line of n space-separated integers denoting the final state of the array after performing d left rotations.
 * 
 * @sampleInput
 * 54
 * 1 2 3 4 5
 * 
 * @sampleOutput
 * 5 1 2 3 4
 * 
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function rotLeft(a, d) {
    let rotPart = a.slice(0, d);
    let rem = a.slice(d, a.length);
    return rem.concat(rotPart);
}

//Example
console.log(rotLeft([1,2,3,4,5], 2));