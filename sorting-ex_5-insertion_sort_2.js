/**
 * @title Insertion Sort
 * @statement check sorting-ex_5-insertion_sort_2.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function insertionSort2(n, arr) {
    let res;
    for (let i = 1; i < n; i++) {
        res = arr.splice(i, 1)[0]
        for (let j = i; j >= 0; j--) {
            if (res > arr[j - 1] || j === 0) {
                arr.splice(j, 0, res);
                break;
            }
        }
        console.log(arr.join(' '));
    }
}

//Example
const unsortedArr = [4, 2, 6, 3, 17, 11];
console.log(insertionSort(unsortedArr));