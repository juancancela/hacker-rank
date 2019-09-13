/**
 * @title Jumping on the clouds
 * 
 * @problem
 * Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
 * Given an integer, n, find and print the number of letter a's in the first n letters of 
 * Lilah's infinite string.
 * For example, if the string s='abcac' and n=10, the substring we consider is abcacabcac, the
 * first 10 characters of her infinite string.
 * There are 4 occurrences of a in the substring.
 * 
 * @description
 * Complete the repeatedString function in the editor below. It should return an integer
 * representing the number of occurrences of a in the prefix of length  in the infinitely
 * repeating string.
 * 
 * repeatedString has the following parameter(s):
 * s: a string to repeat
 * n: the number of characters to consider
 * 
 * @inputFormat
 * The first line contains a single string, s.
 * The second line contains an integer, n.
 * 
 * @constrains
 * 1 <= |s| <= 100
 * 1 <= n <= 10pow12
 * for 25% of the test cases, n <= 10pow6
 * 
 * @outputFormat
 * Print a single integer denoting the number of letter a's in the first n letters of
 * the infinite string created by repeating s infinitely many times.
 * 
 * @sampleInput
 * aba
 * 10
 * 
 * @sampleOutput
 * 7
 * 
 * @explanation
 * The first n=10 letters of the infinite string are abaabaabaa. Because there are
 * 7 a's, we print 7 on a new line.
 * 
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