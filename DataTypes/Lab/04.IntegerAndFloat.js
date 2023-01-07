function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;

  if (Number.isInteger(sum)) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}

// integerAndFloat(1, 2, 4.5);

function integerAndFloat1(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let result = '';

  sum % 1 === 0 ? (result = `${sum} - Integer`) : (result = `${sum} - Float`);

  console.log(result);
}

// integerAndFloat1(1, 2, 4.5);

function integerAndFloat2(num1, num2, num3) {
  let sum = num1 + num2 + num3;

  let splitedSum = String(sum).split('.');

  if (splitedSum[1]) {
    console.log(`${sum} - Float`);
  } else {
    console.log(`${sum} - Integer`);
  }
}

integerAndFloat2(1, 2, 4.5);
