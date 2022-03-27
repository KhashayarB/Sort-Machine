const insertionSort = document.getElementById("alg1");

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
});
