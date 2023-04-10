function equalSums(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let indexBetweenEqualSums = -1;

  if (arr.length === 1) {
    indexBetweenEqualSums = 0;
    console.log(indexBetweenEqualSums);
  }
  for (let i = 1; i < arr.length - 1; i++) {
    for (let leftIndex = 0; leftIndex < i; leftIndex++) {
      leftSum += arr[leftIndex];
    }
    for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
      rightSum += arr[rightIndex];
    }

    if (leftSum === rightSum) {
      indexBetweenEqualSums = i;
      console.log(indexBetweenEqualSums);
      break;
    } else {
      leftSum = 0;
      rightSum = 0;
    }
  }

  if (indexBetweenEqualSums === -1) {
    console.log('no');
  }
}

// equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

function equalSums1(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let indexBetweenEqualSums = -1;

  for (let i = 0; i < arr.length; i++) {
    for (let leftIndex = 0; leftIndex < i; leftIndex++) {
      leftSum += arr[leftIndex];
    }
    for (let rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
      rightSum += arr[rightIndex];
    }

    if (leftSum === rightSum) {
      indexBetweenEqualSums = i;
      console.log(indexBetweenEqualSums);
      break;
    } else {
      leftSum = 0;
      rightSum = 0;
    }
  }

  if (indexBetweenEqualSums === -1) {
    console.log('no');
  }
}

equalSums1([1, 2]);
equalSums1([1, 2, 3, 3]);
equalSums1([1]);
equalSums1([1, 2, 3]);
equalSums1([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
