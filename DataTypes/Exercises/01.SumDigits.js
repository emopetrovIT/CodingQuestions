function sumDigits(number) {
  let sum = 0;

  while (number !== 0) {
    let digitToSum = number % 10;
    sum += digitToSum;
    let nextNum = Math.trunc(number / 10);
    number = nextNum;
  }

  console.log(sum);
}

sumDigits(245678);

function sumDigits1(number) {
  let sum = 0;
  let numberAsString = String(number);

  for (let i = 0; i < numberAsString.length; i++) {
    sum += Number(numberAsString[i]);
  }

  console.log(sum);
}

sumDigits1(245678);
