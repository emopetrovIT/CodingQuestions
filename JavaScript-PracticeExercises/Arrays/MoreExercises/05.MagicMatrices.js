function magicMatrices(matrix) {
  let currentRowSum = 0;
  let currentColSum = 0;
  let sumIsSet = false;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      currentRowSum += matrix[row][col];
    }

    if (!sumIsSet) {
      sum = currentRowSum;
      sumIsSet = true;
    }

    if (currentRowSum !== sum) {
      return false;
    } else {
      currentRowSum = 0;
    }
  }

  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      currentColSum += matrix[row][col];
    }

    if (currentColSum !== sum) {
      return false;
    } else {
      currentColSum = 0;
    }
  }

  return true;
}

magicMatrices([
  [4, 5, 6, 5],
  [6, 5, 4, 5],
  [5, 5, 5, 5],
]);

function magicMatrices1(matrix) {
  let sum = matrix[0].reduce((a, b) => a + b, 0);
  let isMagic = true;

  for (let i = 0; i < matrix.length; i++) {
    let sumRow = matrix[i].reduce((a, b) => a + b, 0);
    let sumCol = matrix.map((row) => row[i]).reduce((a, b) => a + b, 0);

    if (sumRow !== sum || sumCol !== sum) {
      isMagic = false;
      break;
    }
  }

  console.log(isMagic);
}

magicMatrices1([
  [4, 5, 6, 5],
  [6, 5, 4, 5],
  [5, 5, 5, 5],
]);
