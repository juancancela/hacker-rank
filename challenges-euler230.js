/**
 * @description https://www.hackerrank.com/contests/projecteuler/challenges/euler230/problem
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 * @status Works for inputs with n = 2pow30, fails to process n > than that.
 */
const log = console.log;

function decimal(a, b, n) {
    if (n < a.length + b.length) return (a + b)[n - 1];
    const size = val => ((val.match(/A/g) || []).length * a.length) + ((val.match(/B/g) || []).length * b.length);
    const fib = (n, al, bl) => {
        let f, c = '';
        let tokA = 'B';
        let tokB = 'A';
        let endIdx = 0;
        let cond = true;
        while (cond) {
            prev = f;
            startIdx = endIdx;
            f = tokA;
            endIdx = size(f);
            tokA = tokB + tokA;
            tokB = f;
            if (endIdx >= n) {
                cond = false;
                for (let i = 0; i < f.length; i++) {
                    if (f[i] === 'A') {
                        if (startIdx + al >= n) {
                            c = 'A';
                            break;
                        }
                        startIdx += al;
                    }
                    if (f[i] === 'B') {
                        if (startIdx + bl >= n) {
                            c = 'B';
                            break;
                        }
                        startIdx += bl;
                    }
                }
            }
        }
        return { f, startIdx, endIdx, idx: n - startIdx, c };
    };
    const { c, idx } = fib(35, a.length, b.length);
    if (c === 'A') return a[idx - 1];
    return b[idx - 1];
};

function processData(input) {
    const inp = input.split('\n');
    const q = parseInt(inp[0]);
    log('q => ', q);
    for (let i = 1; i <= q * 3;) {
        log('---------------------');
        const a = inp[i];
        const b = inp[i + 1];
        const n = parseInt(inp[i + 2]);
        log(`(${typeof a})----a => `, a);
        log(`(${typeof b})----b => `, b);
        log(`(${typeof n})----n => `, n);
        log('---------------------');
        i += 3;
        log(decimal(a,b,n));
    };
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

//log(decimal('1415926535', '8979323846', 2)); //1
//log(decimal('1415926535', '8979323846', 11)); //8
//log(decimal('1415926535', '8979323846', 35)); //9

