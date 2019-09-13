/**
 * @title Jumping on the clouds
 * 
 * @problem
 * Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads
 * and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current
 * cloud plus 1 or 2. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump
 * from her starting position to the last cloud. It is always possible to win the game.
 * 
 * For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example,
 * c=[0,1,0,0,0,1,0] indexed from 0...6. The number on each cloud is its index in the list so she must avoid the clouds
 * at indexes 1 and 5. She could follow the following two paths: 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6. The first
 * path takes 3 jumps while the second takes 4.
 * 
 * @description
 * Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required,
 * as an integer.
 * 
 * jumpingOnClouds has the following parameter(s):
 *  ->c: an array of binary integers
 * 
 * @constrains
 * 2 <= n <= 100
 * c[i] E {0,1}
 * c[0] = c[n - 1] = 0
 * 
 * @outputFormat
 * Print the minimum number of jumps needed to win the game.
 * 
 * @sampleInput
 * 7
 * 0 0 1 0 0 1 0
 * 
 * @sampleOutput
 * 4
 * 
 * @explanation
 * Emma must avoid c[2] and c[5]. She can win the game with a minimum of 4 jumps:
 * https://s3.amazonaws.com/hr-challenge-images/20832/1461134731-c258160d15-jump2.png
 * 
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
