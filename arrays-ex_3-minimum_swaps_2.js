/**
 * @title Minimum Swaps 2
 * @problem
 * You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any
 * duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps
 * required to sort the array in ascending order.
 * 
 * For example, given the array arr=[7,1,3,2,4,5,6] we perform the following steps:
 * 
 * i   arr                  swap (indices)
 * 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
 * 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
 * 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
 * 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
 * 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
 * 5   [1, 2, 3, 4, 5, 6, 7]
 * 
 * It took 5 swaps to sort the array.
 * 
 * @description
 * Complete the function minimumSwaps in the editor below. It must return an integer representing the
 * minimum number of swaps to sort the array.
 * 
 * minimumSwaps has the following parameter(s):
 * arr: an unordered array of integers
 * 
 * @inputFormat
 * The first line contains an integer, n, the size of arr.
 * The second line contains n space-separated integers arr[i].
 * 
 * @constrains
 * 1 <= n <= 10pow5
 * 1 <= arr[i] <= n
 * 
 * @outputFormat
 * Return the minimum number of swaps to sort the given array.
 * 
 * @sampleInput
 * 4
 * 4 3 1 2
 * 
 * @sampleOutput
 * 3
 * 
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
const log = console.log;
function minimumSwaps(arr) {
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i + 1) continue;
        for (let j = i; j < arr.length; j++) {
            if ((arr[j] === i + 1) && (j !== i)) {
                let tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
                swaps++;
                break;
            }
        }
    }
    return swaps;
}

//Example
console.log(minimumSwaps([4, 3, 1, 2])); //Should return 3
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); //Should return 3