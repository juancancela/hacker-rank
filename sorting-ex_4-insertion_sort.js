/**
 * @title Insertion Sort
 * @statement check sorting-ex_4-insertion_sort.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function insertionSort(arr) {
    let sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let insIdx = 0;
        for (let j = 0; j < sortedArr.length; j++) if (arr[i] > sortedArr[j]) insIdx++;
        sortedArr.splice(insIdx, 0, arr[i]);
    }
    return sortedArr;
}

//Example
const unsortedArr = [4, 2, 6, 3, 17, 11];
console.log(insertionSort(unsortedArr));