/**
 * @title Jumping on the clouds
 * @statement check warm_up-ex_3-jumping_on_the_clouds.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function jumpingOnClouds(c) {
    let jumps = 1;
    for(let i = 0; i < c.length - 3; i++){
        if(c[i + 2] === 0) ++i;
        jumps += 1;
    }
    return jumps;
}

//Example
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // Should return 4
console.log(jumpingOnClouds([0, 0, 0, 0, 0, 1, 0])) // Should return 3
