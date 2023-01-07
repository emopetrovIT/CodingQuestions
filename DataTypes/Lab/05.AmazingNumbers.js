function amazingNumbers(number) {
  let numberAsString = number.toString();
  let sum = 0;

  for (let i = 0; i < numberAsString.length; i++) {
    sum += Number(numberAsString[i]);
  }

  let numToTraverse = sum.toString();
  let index = 0;
  let isSpecial = false;

  while (index <= numToTraverse.length) {
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

// amazingNumbers(12331);

// other solution with includes()
function amazingNumbers1(num) {
  num = num.toString();
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  let result = String(sum).includes('9')
    ? `${num} Amazing? True`
    : `${num} Amazing? False`;

  console.log(result);
}

// amazingNumbers1(12331);

function amazingNumbers2(num) {
  num = num.toString();
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  let result = sum.toString().includes('9');

  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}

amazingNumbers2(1233);
