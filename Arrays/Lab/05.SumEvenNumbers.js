function sumEvenNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  let sum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  console.log(sum);
}

// sumEvenNumbers(['1', '2', '3', '4', '5', '6', '7']);

function sumEvenNumbers1(arr) {
  const sum = arr
    .map((numString) => parseInt(numString))
    .filter((num) => num % 2 === 0)
    .reduce((sum, currentValue) => (sum += currentValue), 0);

  console.log(arr);
}

sumEvenNumbers1(['1', '2', '3', '4', '5', '6', '7']);
sumEvenNumbers1(['1', '3', '5']); // in case there are no even nums
