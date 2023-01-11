function reverseAnArrayOfNumbers(elementsCount, arr) {
  const resultArray = [];

  for (let i = 0; i < elementsCount; i++) {
    resultArray.push(arr[i]);
  }

  // [...numbers] creates a shallow copy, so reverse() does not mutate the original
  const reversed = [...resultArray].reverse();

  console.log(reversed.join(' '));
}

reverseAnArrayOfNumbers(3, [1, 2, 3, 4, 5]);
