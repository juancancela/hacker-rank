/**
 * @title Counting Valleys
 * @statement check warm_up-ex_2-counting_valleys.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function countingValleys(n, s) {
    let lvl = 0;
    let valleys = 0;
    Object.values(s).forEach(step => {
        if(lvl === -1 && step === 'U') valleys += 1;
        step === 'U' ? lvl += 1 : lvl -= 1;
    });
    return valleys;
};

console.log(countingValleys(8, 'UDDDUDUU')); //1