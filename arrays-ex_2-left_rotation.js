/**
 * @title 2D Array - DS
 * @statement check arrays-ex_2-left_rotation.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function rotLeft(a, d) {
    let rotPart = a.slice(0, d);
    let rem = a.slice(d, a.length);
    return rem.concat(rotPart);
}

//Example
console.log(rotLeft([1,2,3,4,5], 2));