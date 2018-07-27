function compare(a, b) {
    return a - b;
}

/**
 * Bubble sort
 * O(N^2)
 * 
 * @param {Array} array 要排序数组
 * @param {Function} cmp 自定义排序比较函数
 * @return {Array} 排序之后数组
 */
function bubbleSort(array, cmp) {
    cmp = cmp || compare;
    let temp;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            //比较大小，交换位置
            if (cmp(array[j], array[j + 1]) > 0) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}



// test
bubbleSort([2, 5, 1, 0, 4, 100]);  //[0, 1, 2, 4, 5, 100]


let data = [
    {
        id: 1,
        age: 19
    },
    {
        id: 2,
        age: 42
    },
    {
        id: 3,
        age: 10
    },
    {
        id: 4,
        age: 9
    },
    {
        id: 5,
        age: 7
    },
    {
        id: 5,
        age: 45
    }
];

bubbleSort(data, (a, b) => {
    return a.age - b.age;
})