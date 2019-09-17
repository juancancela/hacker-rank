/**
 * @title New Year Chaos
 * @statement check arrays-ex_5-new_year_chaos.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function minimumBribes(q) {
    let b = 0;
    for (let n = q.length - 1; n >= 0; n--) {
        if (q[n] - (n + 1) > 2) return console.log('Too chaotic');
        for (let j = Math.max(0, q[n] - 2); j < n; j++) q[j] > q[n] ? ++b : '';
    }
    return console.log(b);
}

//Example
const q = [1, 2, 5, 3, 7, 8, 6, 4];
console.log(minimumBribes(q));