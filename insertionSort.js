function compare(a, b) {
    return a - b;
}

function insertionSort(array, cmp) {
    cmp = cmp || compare;
    var current;
    var j;

    for (let i = 1; i < array.length; i++) {
        current = array[i];
        j = i - 1;

        while (j >= 0 && cmp(array[j], current) > 0) {
            array[j + 1] = array[j];
            j--
        }

        array[j + 1] = current;
    }

    return array;
}

console.log(insertionSort([2, 5, 1, 0, 4]));