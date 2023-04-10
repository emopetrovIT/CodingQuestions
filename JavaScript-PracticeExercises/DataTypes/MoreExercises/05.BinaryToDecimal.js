function binaryToDecimal(binaryNum) {
  let decimalNum = 0;
  let power = 0;

  while (binaryNum !== 0) {
    let digitFromEndToStart = binaryNum % 10;
    decimalNum += digitFromEndToStart * Math.pow(2, power);
    binaryNum = Math.trunc(binaryNum / 10);
    power++;
  }

  console.log(decimalNum);
}

binaryToDecimal(111);

function binaryToDecimal1(binaryNum) {
  let decimalNum = Number.parseInt(binaryNum, 2);
  console.log(decimalNum);
}

binaryToDecimal1(111);

function binaryToDecimal2(binaryNum) {
  let binaryAsString = String(binaryNum);
  let decimaNum = 0;

  for (let i = 0; i < binaryAsString.length; i++) {
    decimaNum = decimaNum * 2 + Number(binaryAsString[i]);
  }

  console.log(decimaNum);
}

binaryToDecimal2(01);
