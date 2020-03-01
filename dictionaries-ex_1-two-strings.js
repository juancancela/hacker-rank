/**
 * @title Two Strings
 * @statement check dictionaries-ex_1-two-strings.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */

function twoStrings(s1, s2) {
    const dict = [];
    s1.split('').forEach(c => dict[c] = 1);
    for(let i = 0; i < s2.length; i++){
        if (dict[s2[i]]) return 'YES';
    }
    return 'NO';
}

//Example
const s11 = 'cat';
const s12 = 'bat';
const s21 = 'col';
const s22 = 'bat';
console.log(twoStrings(s11, s12));
console.log(twoStrings(s21, s22));