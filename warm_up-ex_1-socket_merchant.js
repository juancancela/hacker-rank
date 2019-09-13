/**
 * @title The Sock Merchant
 * @problem
 * John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
 * Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 * For example, there are n = 7 socks with colors ar=[1,2,1,2,1,3,2]. There is one pais of color 1 and one of color 2. There are 
 * three odd socks left, one of each color. The number of pairs is 2.
 * @description
 * Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of 
 * socks that are available.
 * sockMerchant has the following parameter(s):
 *  * n: the number of socks in the pile
 *  * ar: the colors of each sock
 * The first line contains an integer n, the number of socks represented in ar.
 * The second line contains n space-separated integers describing the colors ar[i] of the socks in the pile.
 * @constrains
 * 1 <= n <= 100
 * 1 <= ar[i] <= 100 where 0 <= i < n
 * @format
 * return the total number of matching pairs of socks that John can sell.
 * @sampleInput
 * 9
 * 10 20 20 10 10 30 50 10 20
 * @sampleOutput
 * 3
 * @explanation https://s3.amazonaws.com/hr-challenge-images/25168/1474122392-c7b9097430-sock.png
 * 
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function sockMerchant(n, ar) {
    const pairs = {};
    let total = 0;
    ar.forEach(s => {
        !pairs[s] ? pairs[s] = 1 : pairs[s] += 1;
        if (pairs[s] % 2 === 0) total += 1;
    });
    return total;
}

// Example
console.log(sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]));
