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

function reverseAnArrayOfNumbers1(nElements, arr) {
  const slisedArray = arr.slice(0, nElements);
  slisedArray.reverse();

  console.log(slisedArray.join(' '));
}

reverseAnArrayOfNumbers1(3, [1, 2, 3, 4, 5]);
