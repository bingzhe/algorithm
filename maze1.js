/**
 * 广度优先遍历
 * 走迷宫 a是迷宫，0表示可以通过，1表示障碍物不能通过。
 * 计算从(0,0)到(p,q)某个坐标的最小步数。
 */

let a = [
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
];
let target = [5, 5];

let n = a.length; //地图行数
let m = a[0].length; //地图列数

let queue = [];
let next = [[0, 1], [1, 0], [0, -1], [-1, 0]]; //每个点的可走的四个方向
let book = []; //标记走过路的二维数组
let tx, ty, step;

//初始化标记数组
for (let i = 0; i <= n; i++) {
    book[i] = [];
    for (let j = 0; j <= m; j++) {
        book[i][j] = 0;
    }
}

let start = [0, 0, 0];

//队列中插入入口坐标
queue.push(start);
book[start[0]][start[1]] = 1;

let flag = 0; //标记是否到达目标点

while (queue.length !== 0) {
    for (let k = 0; k <= 3; k++) {
        tx = queue[0][0] + next[k][0];
        ty = queue[0][1] + next[k][1];
        step = queue[0][2];

        //判断是否越界        
        if (tx < 0 || tx > n - 1 || ty < 0 || ty > m - 1) {
            continue;
        }

        //不为障碍点并且不在路径中
        if (a[tx][ty] === 0 && book[tx][ty] === 0) {
            book[tx][ty] = 1; //表示这个点已经走过
            step++;
            let node = [tx, ty, step]
            queue.push(node);
        }

        //到达（p，q)坐标
        if (x === start[0] && y === start[1]) {
            flag = 1;
            break;
        }
    }
}