/**
 * @title Jumping on the clouds
 * @statement check warm_up-ex_4-repeated_string.pdf
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
function repeatedString(s, n) {
    const _a = str => (str.match(/a/g) || []).length;
    return _a(n <= s.length ? s.substr(0, n) : s) * (Math.floor(n / s.length)) +
        _a(s.substr(0, Math.floor(n % s.length)));
};

//Example
console.log(repeatedString('aba', 10)); //7
console.log(repeatedString('a', 1000000000000)); //1000000000000