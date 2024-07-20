import LinkedList from "../models/LinkedList.js"
let list = new LinkedList()
//let root = document.getElementById("list-bussines")
const rute = "./controllers/bussines.json"
//console.time("medicion 1")
fetch(rute)
.then(response => response.json())
.then(data => {
    //En esta parte unicamente se muestran los primeros 100 registros
    /*
    for (let x=0;x<10;x++) {
        let name = data[x].name
        lista.add(name)
    }
    */

    let arrayData = [];
        
        console.time("LinkedList Insertion");
        for (let i = 0; i < 100; i++) {
            list.add(data[i].name);
        }
        console.timeEnd("LinkedList Insertion");

        console.time("LinkedList bubbleSort");
        list.bubbleSort()
        console.timeEnd("LinkedList bubbleSort");

        console.time("LinkedList mergeSort");
        list.mergeSort()
        console.timeEnd("LinkedList mergeSort");

        console.time("LinkedList radixSort");
        list.radixSort()
        console.timeEnd("LinkedList radixSort");

        console.time("Array Insertion");
        for (let i = 0; i < 100; i++) {
            arrayData.push(data[i].name);
        }
        console.timeEnd("Array Insertion");

        console.time("Array bubbleSort");
        bubbleSort(arrayData)
        console.timeEnd("Array bubbleSort");

        console.time("Array mergeSort");
        mergeSort(arrayData)
        console.timeEnd("Array mergeSort");

        console.time("Array radixSort");
        radixSort(arrayData)
        console.timeEnd("Array radixSort");

}).catch(err => console.log(err))
//console.timeEnd("medicion 1")

function bubbleSort(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], lIndex = 0, rIndex = 0;

    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] < right[rIndex]) {
            result.push(left[lIndex]);
            lIndex++;
        } else {
            result.push(right[rIndex]);
            rIndex++;
        }
    }

    return result.concat(left.slice(lIndex)).concat(right.slice(rIndex));
}

function radixSort(array) {
    const maxNum = Math.max(...array);
    let digit = 1;
    while (digit <= maxNum) {
        let buckets = [...Array(10)].map(() => []);
        for (let num of array) {
            buckets[Math.floor(num / digit) % 10].push(num);
        }
        array = [].concat(...buckets);
        digit *= 10;
    }
    return array;
}

function searchArray(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return array[i];
        }
    }
    return null;
}