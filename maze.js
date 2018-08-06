/**
 * 深度优先遍历
 * 走迷宫 a是迷宫，0表示可以通过，1表示障碍物不能通过。
 * 计算从(0,0)到(p,q)某个坐标的最小步数。
 */

/**
 * 
 * @param {Array} a 地图的二位数组表示
 * @param {Array} target 目的点坐标[1,1],不能为障碍点坐标
 */
function getMinStep(a, target) {
    let min = 999999,
        n = a.length, //地图行数
        m = a[0].length, //地图列数
        p = target[0],
        q = target[1],
        next = [[0, 1], [1, 0], [0, -1], [-1, 0]], //每个点的可走的四个方向
        book = []; //标记走过路的二维数组

    //初始化标记数组
    for (let i = 0; i <= n; i++) {
        book[i] = [];
        for (let j = 0; j <= m; j++) {
            book[i][j] = 0;
        }
    }

    //在一个坐标的处理
    function dfs(x, y, step) {
        let tx, ty;

        //到达（p，q)坐标
        if (x === p && y === q) {
            if (step < min) {
                min = step;
            }
            return;
        }

        //枚举4种写法
        for (let k = 0; k <= 3; k++) {
            //计算下一个点坐标
            tx = x + next[k][0];
            ty = y + next[k][1];

            //是否越界
            if (tx < 0 || tx > n - 1 || ty < 0 || ty > m - 1) {
                continue;
            }

            //不为障碍点并且不在路径中
            if (a[tx][ty] === 0 && book[tx][ty] === 0) {
                book[tx][ty] = 1; //表示这个点已经走过
                dfs(tx, ty, step + 1); //尝试下一个点
                book[tx][ty] = 0;//尝试结束，取消这个点的标记
            }
        }
        return;
    }

    //从(0,0)开始处理
    dfs(0, 0, 0);

    return min;
}

let a = [
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
];

let minStep = getMinStep(a, [5, 5]);
console.log(minStep);