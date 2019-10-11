/**
 * @title Intro to tutorial challenges
 * @statement check sorting-ex_0-intro-to-tutorial-challenges.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function introTutorial(V, arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === V) return i;
    }
}