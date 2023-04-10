function reverseInPlace(arrayElements) {
  for (let i = 0; i < arrayElements.length / 2; i++) {
    swapElements(arrayElements, i, arrayElements.length - 1 - i);
  }

  function swapElements(arr, startIndex, endIndex) {
    let temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;
  }

  console.log(arrayElements.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
