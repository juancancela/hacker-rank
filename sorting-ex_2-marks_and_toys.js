/**
 * @title Mark and Toys
 * @statement check sorting-ex_2-marks_and_toys.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function maximumToys(prices, k) {
    let total = 0;
    const _swap = (items, leftIndex, rightIndex) => {
        const temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    };

    const _partition = (items, left, right) => {
        const pivot = items[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;
        while (i <= j) {
            while (items[i] < pivot) i++;
            while (items[j] > pivot) j--;
            if (i <= j) {
                _swap(items, i, j);
                i++;
                j--;
            }
        } 
        return i;
    }

    const _quickSort = (items, left, right) => {
        let index;
        if (items.length > 1) {
            index = _partition(items, left, right);
            if (left < index - 1) _quickSort(items, left, index - 1);
            if (index < right) _quickSort(items, index, right);
        }
        return items;
    }

    const sortedPrices = _quickSort(prices, 0, prices.length - 1);
    for (let i = 0; i < sortedPrices.length; i++) {
        if (k - sortedPrices[i] >= 0) {
            ++total;
            k -= sortedPrices[i];
        } else {
            break;
        }
    };

    return total;
};

//Examples
const prices = [1, 12, 5, 111, 2000, 1000, 10];
k = 50;
console.log(maximumToys(prices, k));