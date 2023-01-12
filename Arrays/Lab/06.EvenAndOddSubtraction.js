function evenAndOddSubtraction(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  let evenSum = 0;
  let oddSum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  let difference = evenSum - oddSum;
  console.log(difference);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);

function evenAndOddSubtraction1(arr) {
  const difference = arr.reduce((sum, currentValue) => {
    if (currentValue % 2 === 0) {
      sum += currentValue;
    } else {
      sum -= currentValue;
    }
    return sum;
  }, 0);

  console.log(difference);
}

evenAndOddSubtraction1([1, 2, 3, 4, 5, 6]);
