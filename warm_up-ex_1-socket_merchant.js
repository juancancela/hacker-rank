/**
 * @title The Sock Merchant
 * @statement check warm_up-ex_1-socket_merchant.pdf
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
