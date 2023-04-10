function primeNumberChecker(num) {
  let isPrime = true;
  let rootSquareOfNum = Math.pow(num, 0.5);

  for (let i = 2; i <= rootSquareOfNum; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }

  console.log(isPrime);
}

// primeNumberChecker(7);
// primeNumberChecker(8);

function primeNumberChecker1(num) {
  let divider = 2;
  let maxDivider = Math.sqrt(num);
  let numIsPrime = true;

  while (numIsPrime && divider <= maxDivider) {
    if (num % divider === 0) {
      numIsPrime = false;
    }
    divider++;
  }

  console.log(numIsPrime);
}

// primeNumberChecker1(7);
// primeNumberChecker1(8);
