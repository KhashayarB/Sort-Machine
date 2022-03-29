const insertionSort = document.getElementById("alg1");
const mergeSort = document.getElementById("alg2");
const quickSort = document.getElementById("alg3");
const heapSort = document.getElementById("alg4");

let arr = [];
let arraySize = 0;
alert("Welcome to my Sort Machine");
arraySize = prompt("Enter your array size:");

let createArray = function () {
  for (let i = 0; i < arraySize; i++) {
    arr[i] = parseInt(prompt(`Enter array Element ${i + 1} :`));
  }
  return arr;
  //   console.log(arr);
};

insertionSort.addEventListener("click", () => {
  const insertionSortArray = createArray();
  console.log("Unsorted: ", insertionSortArray);

  console.log("Sorted: ", insertionSort(insertionSortArray));

  //var startTime = performance.now();
  console.time("Insertion Sort");
  function insertionSort(array) {
    for (let j = 1; j < array.length; j++) {
      let key = array[j];
      let i = j - 1;
      while (i >= 0 && array[i] > key) {
        array[i + 1] = array[i];
        i = i - 1;
      }
      array[i + 1] = key;
    }
    return arr;
  }
  console.timeEnd("Insertion Sort");
  // var endTime = performance.now();
  // var totalTime = endTime - startTime;
  // console.log(totalTime);
});

mergeSort.addEventListener("click", () => {
  const mergeSortArray = createArray();

  console.log("Unsorted:", mergeSortArray);

  console.log("Sorted: ", mergeSort(mergeSortArray));

  console.time("Merge Sort");
  function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    let resultArray = [],
      leftIndex = 0,
      rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }
  console.timeEnd("Merge Sort");
});

quickSort.addEventListener("click", () => {
  const quickSortArray = createArray();
  console.log("Unsorted:", quickSortArray);

  console.log("Sorted: ", quickSort(quickSortArray));

  console.time("Quick Sort");
  function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }

    var pivot = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
  }
  console.timeEnd("Quick Sort");
});

heapSort.addEventListener("click", () => {});
