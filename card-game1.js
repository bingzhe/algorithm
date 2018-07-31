/**
 * 纸牌游戏-小猫钓鱼
 * A有6张牌[2,4,1,2,5,6],B有6张牌[3,1,3,5,6,4]
 * 每人依次出一张，桌上有相同的时候获取到相同牌之间的所有牌，一人手上没有牌时，另一个获胜
 * 判断谁最后会获胜
 */

// #include < stdio.h >
//     struct queue
// {
//     int data[1000];
//     int head;
//     int tail;
// };

// struct stack
// {
//     int data[10];
//     int top;
// };
// int main()
// {
//     struct queue q1, q2;
//     struct stack s;
//     int book[10];
//     int i, t;
//     //初始化队列
//     q1.head = 1; q1.tail = 1;
//     q2.head = 1; q2.tail = 1;
//     //初始化栈
//     s.top = 0;
//     //初始化用来标记的数组，用来标记哪些牌已经在桌上
//     for (i = 1; i <= 9; i++)
//         book[i] = 0;
//     //依次向队列插入6个数
//     //小哼手上的6张牌
//     for (i = 1; i <= 6; i++) {
//         scanf("%d",& q1.data[q1.tail]);
//         q1.tail++;
//     }
//     //小哈手上的6张牌
//     for (i = 1; i <= 6; i++) {
//         scanf("%d",& q2.data[q2.tail]);
//         q2.tail++;
//     }
//     while (q1.head < q1.tail && q2.head < q2.tail) //当队列不为空的时候执行循环
//     {
//         t = q1.data[q1.head];//小哼出一张牌
//         //判断小哼当前打出的牌是否能赢牌
//         if (book[t] == 0) //表明桌上没有牌面为t的牌

//         {
//             //小哼此轮没有赢牌
//             q1.head++; //小哼已经打出一张牌，所以要把打出的牌出队
//             s.top++;
//             s.data[s.top] = t; //再把打出的牌放到桌上，即入栈
//             book[t] = 1; //标记桌上现在已经有牌面为t的牌
//         }
//         else {
//             //小哼此轮可以赢牌
//             q1.head++;//小哼已经打出一张牌，所以要把打出的牌出队
//             q1.data[q1.tail] = t;//紧接着把打出的牌放到手中牌的末尾
//             q1.tail++;
//             while (s.data[s.top] != t) //把桌上可以赢得的牌依次放到手中牌的末尾
//             {
//                 book[s.data[s.top]] = 0;//取消标记
//                 q1.data[q1.tail] = s.data[s.top];//依次放入队尾
//                 q1.tail++;
//                 s.top--; //栈中少了一张牌，所以栈顶要减1
//             }
//         }
//         t = q2.data[q2.head]; //小哈出一张牌
//         //判断小哈当前打出的牌是否能赢牌
//         if (book[t] == 0) //表明桌上没有牌面为t的牌
//         {
//             //小哈此轮没有赢牌
//             q2.head++; //小哈已经打出一张牌，所以要把打出的牌出队
//             s.top++;
//             s.data[s.top] = t; //再把打出的牌放到桌上，即入栈
//             book[t] = 1; //标记桌上现在已经有牌面为t的牌
//         }
//         else {
//             //小哈此轮可以赢牌
//             q2.head++;//小哈已经打出一张牌，所以要把打出的牌出队
//             q2.data[q2.tail] = t;//紧接着把打出的牌放到手中牌的末尾
//             q2.tail++;
//             while (s.data[s.top] != t) //把桌上可以赢得的牌依次放到手中牌的末尾
//             {
//                 book[s.data[s.top]] = 0;//取消标记

//                 q2.data[q2.tail] = s.data[s.top];//依次放入队尾
//                 q2.tail++;
//                 s.top--;
//             }
//         }
//     }
//     if (q2.head == q2.tail) {
//         printf("小哼win\n");
//         printf("小哼当前手中的牌是");
//         for (i = q1.head; i <= q1.tail - 1; i++)
//             printf(" %d", q1.data[i]);
//         if (s.top > 0) //如果桌上有牌则依次输出桌上的牌
//         {
//             printf("\n桌上的牌是");
//             for (i = 1; i <= s.top; i++)
//                 printf(" %d", s.data[i]);
//         }
//         else
//             printf("\n桌上已经没有牌了");
//     }
//     else {
//         printf("小哈win\n");
//         printf("小哈当前手中的牌是");
//         for (i = q2.head; i <= q2.tail - 1; i++)
//             printf(" %d", q2.data[i]);
//         if (s.top > 0) //如果桌上有牌则依次输出桌上的牌
//         {
//             printf("\n桌上的牌是");
//             for (i = 1; i <= s.top; i++)
//                 printf(" %d", s.data[i]);
//         }
//         else
//             printf("\n桌上已经没有牌了");
//     }
//     getchar(); getchar();
//     return 0;
// }

class Queue {
    constructor(data) {
        this.data = data;
        this.head = 0;
        this.tail = this.data.length - 1;
    }
}

class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
}

let a = new Queue([2, 4, 1, 2, 5, 6]);
let b = new Queue([3, 1, 3, 5, 6, 4]);
let c = new Stack();


// 标记数组，标记那些牌在桌面上
let book = new Array(10);
let t;

for (let i = 0; i <= 9; i++) {
    book[i] = 0;
}
debugger;
//队列不为空的是循环
// while (a.head < a.tail && b.head < b.tail) {
while (a.data.length !== 0 && b.data.length !== 0) {
    debugger;
    // a出一张牌
    t = a.data.shift();

    if (book[t] === 0) { // 表明桌上没有牌面为t的牌
        // a.head++;
        a.data.shift();
        c.top++;
        c.data[c.top] = t;
        book[t] = 1;
    } else {  //a可以赢牌

        let k = a.data.shift();
        a.data.push(k);

        // 依次把赢的牌放入手中
        while (c.data[c.top] != t) {
            book[c.data[c.top]] = 0; //取消标记
            a.data.push(c.data[c.top]);
            c.top--;
        }
    }

    //b出一张牌
    t = b.data.shift();
    if (book[t] === 0) { // 表明桌上没有牌面为t的牌
        // a.head++;
        b.data.shift();
        c.top++;
        c.data[c.top] = t;
        book[t] = 1;
    } else {  //a可以赢牌

        let k = b.data.shift();
        b.data.push(k);

        // 依次把赢的牌放入手中
        while (c.data[c.top] != t) {
            book[c.data[c.top]] = 0; //取消标记
            b.data.push(c.data[c.top]);
            c.top--;
        }
    }
}


if (a.data.length === 0) {
    console.log("b赢")
    console.log("b手中的牌是", b.data)
} else if (b.data.length === 0) {
    console.log("a赢")
    console.log("a手中的牌是", a.data)
}

