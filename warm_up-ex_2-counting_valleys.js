/**
 * @title Counting Valleys
 * 
 * @problem
 * Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. 
 * During his last hike he took exactly n steps. For every step he took, he noted if it was an uphill, U, or a 
 * downhill, D step. Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in 
 * altitude. We define the following terms:
 *
 *   -> A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and 
 *      ending with a step down to sea level.
 *   -> A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and
 *      ending with a step up to sea level.
 * 
 * Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked 
 * through.
 *
 * For example, if Gary's path is s=[DDUUUUDD], he first enters a valley 2 units deep. Then he climbs out an up onto 
 * a mountain 2 units high. Finally, he returns to sea level and ends his hike.
 * 
 * @description
 * Complete the countingValleys function in the editor below. It must return an integer that denotes the number of
 * valleys Gary traversed.
 * 
 * countingValleys has the following parameter(s):
 * n: the number of steps Gary takes
 * s: a string describing his path
 * 
 * @constrains
 * 2 <= n <= 10pow6
 * s[i] E {UD}
 * 
 * @outputFormat
 * Print a single integer that denotes the number of valleys Gary walked through during his hike.
 * 
 * @sampleInput
 * 8
 * UDDDUDUU
 * 
 * @sampleOutput
 * 1
 * 
 * @explanation
 * If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:
 * 
 * _/\      _
 *   \     /
 *    \/\/
 * 
 * He enters and leaves one valley.
 * 
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