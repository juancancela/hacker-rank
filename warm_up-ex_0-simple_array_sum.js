/**
 * @title Simple Array Sum
 * @problem
 * Given an array of integers, find the sum of its elements.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function simpleArraySum(ar) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return ar.reduce(reducer, 0);
}

//Example
console.log(simpleArraySum([1, 2, 3, 4]));