// 冒泡排序
function bubbleSort(array) {
    let n = array.length;
    let t;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i; j++) {
            //比较大小，交换位置
            if (array[j] > array[j + 1]) {
                t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
            }
        }
    }
    return array;
}

bubbleSort([2, 5, 1, 0, 4, 100]);


//由属性排某个对象
var data = [
    {
        id: 1,
        age: 19
    },
    {
        id: 2,
        age: 8
    },
    {
        id: 3,
        age: 10
    },
    {
        id: 4,
        age: 8
    },
    {
        id: 5,
        age: 7
    }
];

function bubbleSortObj(array) {
    let n = array.length;
    let t;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            //比较大小，交换位置
            if (array[j].age > array[j + 1].age) {
                t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
            }
        }
    }
    return array;
}

console.log(bubbleSortObj(data));