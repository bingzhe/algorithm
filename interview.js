var xhr = new XMLHttpRequest();

xhr.open('get', url, true);
xhr.send(null);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            success(xhr.responseText);
        } else {
            fail && fail(xhr.status);
        }
    }
}

const total = 100000;
const once = 20;
const loopCount = total / once;

let countOfRender = 0;
let ul = document.querySelector("ul");
function add() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < once; i++) {
        const li = document.createElement("li");
        li.innerText = Math.floor(Math.random() * total);
        fragment.appendChild(li);
    }

    ul.appendChild(fragment);
    countOfRender += 1;
    loop();
}

function loop() {
    if (countOfRender < loogCount) {
        window.requestAnimationFrame(add);
    }
}

loop();


let quickSort = (function () {

    function partition(array, left, right, cmp) {
        let mid = array[Math.floor((left + right) / 2)];
        let temp;

        while (left <= right) {
            while (cmp(array[left], mid) < 0) {
                left += 1;
            }

            while (cmp(array[right], mid) > 0) {
                right -= 1;
            }

            if (left <= right) {
                temp = array[left];
                array[left] = array[right];
                array[right] = array[left];

                left += 1;
                right -= 1;
            }
        }

        return left;
    }

    function quicksort(array, left, right, cmp) {
        let mid = partition(array, left, right, cmp);

        if (left < mid - 1) {
            quickSort(array, left, mid - 1, cmp);
        }
        if (right > mid) {
            quicksort(array, mid, right, cmp);
        }
    }

    return function (array, cmp) {
        cmp = cmp || compare;
        quickSort(array, 0, array.length - 1, cmp);
        return array;
    }
})();