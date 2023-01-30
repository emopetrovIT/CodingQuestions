function extractIncreasingSubsequence(arr) {
  const increasingNumbers = [];
  let biggestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= biggestNum) {
      biggestNum = arr[i];
      increasingNumbers.push(biggestNum);
    }
  }

  console.log(increasingNumbers.join(' '));
}

extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
