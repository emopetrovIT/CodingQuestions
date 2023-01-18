function maxSequenceOfEqualElements(arr) {
  let counter = 1;
  let longestSequenceOfEqualElement = 1;
  let element = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else {
      counter = 1;
    }

    if (counter > longestSequenceOfEqualElement) {
      longestSequenceOfEqualElement = counter;
      element = arr[i];
    }
  }
  const result = Array(longestSequenceOfEqualElement).fill(element);
  console.log(result.join(' '));
}

// maxSequenceOfEqualElements([1]);
// maxSequenceOfEqualElements([1, 1]);
// maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);

function maxSequenceOfEqualElements1(arr) {
  let counter = 1;
  let longestSequenceOfEqualElement = 1;
  let indexOfElement = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
      if (counter > longestSequenceOfEqualElement) {
        indexOfElement = i;
        longestSequenceOfEqualElement = counter;
      }
    } else {
      counter = 1;
    }
  }
  const result = Array(longestSequenceOfEqualElement).fill(arr[indexOfElement]);
  console.log(result.join(' '));
}

maxSequenceOfEqualElements1([1]);
// maxSequenceOfEqualElements1([1, 1]);
// maxSequenceOfEqualElements1([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements1([0, 1, 1, 5, 2, 2, 6, 3, 3]);
maxSequenceOfEqualElements1([1, 2, 3, 4]);
