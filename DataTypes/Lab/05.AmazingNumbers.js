function solve(number) {
  let numberAsString = number.toString();
  let sum = 0;

  for (let i = 0; i < numberAsString.length; i++) {
    sum += Number(numberAsString[i]);
  }

  let numToTraverse = sum.toString();
  let index = 0;
  let isSpecial = false;

  while (numToTraverse.length >= index) {
    let currentSymbol = numToTraverse[index];
    if (currentSymbol === '9') {
      console.log(`${numberAsString} Amazing? True`);
      isSpecial = true;
      break;
    }

    index++;
  }

  if (!isSpecial) {
    console.log(`${numberAsString} Amazing? False`);
  }
}

solve(12331);
