function specialNumbers(number) {
  for (let i = 1; i <= number; i++) {
    let currentNumberAsString = i.toString();
    let sumOfDigits = 0;

    for (let index = 0; index < currentNumberAsString.length; index++) {
      let currentDigit = Number(currentNumberAsString[index]);
      sumOfDigits += currentDigit;
    }

    if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
      console.log(`${currentNumberAsString} -> True`);
    } else {
      console.log(`${currentNumberAsString} -> False`);
    }
  }
}

specialNumbers(15);
