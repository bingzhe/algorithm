/**
 * 火柴棍等式
 * 有m(m<=24)可以拼出多少个不同形状的a+b=c等式
 * 0,1,2,3,4,5,6,7,8,9需要的火柴棍数量分别为6,2,5,5,4,5,6,3,7,6
 */

/**
 * 计算一个数字需要的火柴棍数量
 */
function getNum(n) {
    //标记0-9所需要的火柴数量
    let book = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
    let i = Math.floor(n / 10);
    let num;

    if (i === 0) {
        num = book[n];
    } else {
        num = book[i] + book[n % 10];
    }

    return num;
}

/**
 * 枚举所有情况列出
 */
function main(m) {
    let a, b, c, sum = 0;

    for (a = 0; a < 1111; a++) {
        for (b = 0; b < 1111; b++) {
            c = a + b;
            if (getNum(a) + getNum(b) + getNum(c) === m - 4) {
                console.log(`${a} + ${b} = ${c}`)
                sum++;
            }
        }
    }
    console.log(`一共有${sum}个等式`);
}

// test
main(18);
// 0 + 4 = 4
// 0 + 11 = 11
// 1 + 10 = 11
// 2 + 2 = 4
// 2 + 7 = 9
// 4 + 0 = 4
// 7 + 2 = 9
// 10 + 1 = 11
// 11 + 0 = 11
// 一共有9个等式