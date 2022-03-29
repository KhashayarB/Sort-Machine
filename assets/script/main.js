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

heapSort.addEventListener("click", () => {
  const heapSortArray = createArray();
  console.log("Unsorted:", heapSortArray);

  console.log("Sorted: ", heapSort(heapSortArray));

  console.time("Heap Sort");

  function buildMaxHeap(arr) {
    // Get index of the middle element
    let i = Math.floor(arr.length / 2 - 1);

    // Build a max heap out of
    // All array elements passed in
    while (i >= 0) {
      heapify(arr, i, arr.length);
      i -= 1;
    }
  }

  function heapify(heap, i, max) {
    let index;
    let leftChild;
    let rightChild;

    while (i < max) {
      index = i;

      // Get the left child index
      // Using the known formula
      leftChild = 2 * i + 1;

      // Get the right child index
      // Using the known formula
      rightChild = leftChild + 1;

      // If the left child is not last element
      // And its value is bigger
      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }

      // If the right child is not last element
      // And its value is bigger
      if (rightChild < max && heap[rightChild] > heap[index]) {
        index = rightChild;
      }

      // If none of the above conditions is true
      // Just return
      if (index === i) {
        return;
      }

      // Else swap elements
      swap(heap, i, index);

      // Continue by using the swapped index
      i = index;
    }
  }

  function swap(arr, firstItemIndex, lastItemIndex) {
    const temp = arr[firstItemIndex];

    // Swap first and last items in the array
    arr[firstItemIndex] = arr[lastItemIndex];
    arr[lastItemIndex] = temp;
  }

  function heapSort(arr) {
    // Build max heap
    buildMaxHeap(arr);

    // Get the index of the last element
    lastElement = arr.length - 1;

    // Continue heap sorting until we have
    // One element left
    while (lastElement > 0) {
      swap(arr, 0, lastElement);
      heapify(arr, 0, lastElement);
      lastElement -= 1;
    }

    // Return sorted array
    return arr;
  }
  console.timeEnd("Heap Sort");
});
