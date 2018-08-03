/**
 * 纸牌游戏-小猫钓鱼
 * a有6张牌[2,4,1,2,5,6],b有6张牌[3,1,3,5,6,4],牌不会超过数字9
 * 每人依次出一张，桌上有相同的时候获取到相同牌之间的所有牌，一人手上没有牌时，另一个获胜,
 * 判断谁最后会获胜
 */

//a,b模拟队列操作， c模拟栈操作
function main() {
    var a = [2, 4, 1, 2, 5, 6];
    var b = [3, 1, 3, 5, 6, 4];
    var c = [];

    var book = new Array(10); // 标记数组，标记那些牌在桌面上
    var t, k;


    for (let i = 0; i <= 9; i++) {
        book[i] = 0;
    }

    //双方手中都还有牌时循环
    while (a.length !== 0 && b.length !== 0) {
        // a出一张牌
        t = a.shift();

        if (book[t] === 0) { // 表明桌上没有牌面为t的牌
            c.push(t);
            book[t] = 1;
        } else {
            //a可以赢牌
            //把当前牌放入最后
            a.push(t);

            // 依次把赢的牌放入手中
            while (c[c.length - 1] != t) {
                book[c[c.length - 1]] = 0; //取消标记
                k = c.pop();
                a.push(k);
            }
        }

        //b出一张牌
        t = b.shift();

        if (book[t] === 0) { // 表明桌上没有牌面为t的牌
            c.push(t);
            // c[c.top] = t;
            book[t] = 1;
        } else {
            //b可以赢牌

            //把当前牌放入最后
            b.push(t);

            // 依次把赢的牌放入手中
            while (c[c.length - 1] != t) {
                book[c[c.length - 1]] = 0; //取消标记
                k = c.pop();
                b.push(k);
            }
        }
    }


    if (a.length === 0) {
        console.log("b赢");
        console.log("b手中的牌是", b);
        console.log("桌上的牌是", c);

    } else if (b.length === 0) {
        console.log("a赢");
        console.log("a手中的牌是", a);
        console.log("桌上的牌是", c);
    }
}

main();
