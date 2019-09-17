/**
 * @title Minimum Swaps 2
 * @statement check arrays-ex_3-minimum_swaps_2.pdf
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