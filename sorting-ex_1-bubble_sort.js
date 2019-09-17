/**
 * @title Bubble Sort
 * @statement check sorting-ex_1-bubble_sort.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
// Complete the countSwaps function below.
function countSwaps(arr) {
    let swaps = 0;
    const swap = j => {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        ++swaps;
    };
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j);
            }
        }
    }
    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${arr[0]}`);
    console.log(`Last Element: ${arr[arr.length - 1]}`);
}

//Example
const a = [6, 4, 1];
console.log(countSwaps(a));