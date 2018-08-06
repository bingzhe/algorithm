/**
 * 深度优先遍历，输出1~n的全排列
 */

var Timer = {
    data: {},
    start: function (key) {
        Timer.data[key] = new Date();
    },
    stop: function (key) {
        var time = Timer.data[key];
        if (time)
            Timer.data[key] = new Date() - time;
    },
    getTime: function (key) {
        return Timer.data[key];
    }
};

/**
 * @param {Number} n 要排列的1~n
 * @return 所有的情况
 */
function permutation(n) {
    let a = [], //排列的位置的数组
        book = [],//标记是否已经用过的数组
        all = []; //存放所有的情况

    for (let i = 0; i <= n; i++) {
        book.push(0);
    };

    function dfs(step) {

        //判断边界，数组下标是从0开始，所以到n已经排完一种情况，保存这种排列
        if (step === n) {
            all.push(a.join(''));
            return; //返回上一步调用的函数
        }

        //第step个位置，要放那个数字
        for (let i = 1; i <= n; i++) {

            //判断是否已经使用
            if (book[i] === 0) {
                a[step] = i; //放入第step个位置
                book[i] = 1; //标记已经使用

                dfs(step + 1); //处理下一个位置
                book[i] = 0; //收回刚才的放下的数字
            }
        }
        return;
    }

    //从第0个位置开始
    dfs(0);
    console.log(all);
}

Timer.start("permutation");
permutation(10);
Timer.stop("permutation");
console.log("需要时间" + Timer.getTime("permutation"));