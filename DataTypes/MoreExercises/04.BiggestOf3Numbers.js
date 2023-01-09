function biggestOfThreeNumbers(num1, num2, num3) {
  let biggestNum = num1;

  if (num2 > biggestNum) {
    biggestNum = num2;
  }

  if (num3 > biggestNum) {
    biggestNum = num3;
  }
  console.log(biggestNum);
}

biggestOfThreeNumbers(2, 5, 7);
biggestOfThreeNumbers(2, 7, 5);
biggestOfThreeNumbers(5, 2, 7);
biggestOfThreeNumbers(5, 7, 2);
biggestOfThreeNumbers(7, 2, 5);
biggestOfThreeNumbers(7, 5, 2);
