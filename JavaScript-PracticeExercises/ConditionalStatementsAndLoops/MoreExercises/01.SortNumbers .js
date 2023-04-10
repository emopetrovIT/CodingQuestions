function sortNumbers(num1, num2, num3) {
  let numbers = [num1, num2, num3];

  numbers.sort((a, b) => b - a);

  console.log(numbers.join('\n'));
}

sortNumbers(2, 1, 3);
