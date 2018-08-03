/**
 * 桶排序
 */

function main(arr) {
    var a = new Array(10);
    var b = [];

    for (let i = 0; i < 10; i++) {
        a[i] = 0;
    }

    arr.forEach(item => {
        a[item]++;
    });

    for (let i = 10; i >= 0; i--) {
        for (let j = 0; j < a[i]; j++) {
            b.push(i);
        }
    }

    console.log(b);
}

var arr = [5, 2, 3, 8, 3, 5];
main(arr);