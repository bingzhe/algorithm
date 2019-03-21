function compare(a, b) {
    return a - b;
}

let quickSort = (function () {

    function partition(array, left, right, cmp) {
        let pivot = array[Math.floor((left + right) / 2)];
        let temp;
        while (left <= right) {
            while (cmp(array[left], pivot) < 0) {
                left += 1;
            }
            while (cmp(array[right], pivot) > 0) {
                right -= 1;
            }
            if (left <= right) {
                temp = array[left];
                array[left] = array[right];
                array[right] = temp;

                left += 1;
                right -= 1;
            }
        }
        return left;
    }

    //递归调用
    function quicksort(array, left, right, cmp) {
        let mid = partition(array, left, right, cmp);
        if (left < mid - 1) {
            quicksort(array, left, mid - 1, cmp);
        }

        if (right > mid) {
            quicksort(array, mid, right, cmp);
        }
    }

    /**
     * quick sort 快速排序
     * O(N log(N))
     * 
     * @param {Array} array 要排序数组
     * @param {Function} cmp 自定义排序比较函数
     * @return {Array} 排序之后数组
     */
    return function (array, cmp) {
        cmp = cmp || compare;
        quicksort(array, 0, array.length - 1, cmp);
        return array;
    }
})();

// test
console.log(quickSort([2, 5, 1, 0, 4, 100, 32, 45, 123, 4262, 123, 1234, 3454, 656, 132]));
 //[0, 1, 2, 4, 5, 32, 45, 100, 123, 123, 132, 656, 1234, 3454, 4262]