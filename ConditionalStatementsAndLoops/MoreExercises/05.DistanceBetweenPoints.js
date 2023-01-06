function distanceBetweenTwoPoints(x1, y1, x2, y2) {
  let firstSide = Math.abs(x1 - x2);
  let secondSide = Math.abs(y1 - y2);

  let distanceInSquareRoot = Math.pow(firstSide, 2) + Math.pow(secondSide, 2);
  let distanceBetweenPoints = Math.sqrt(distanceInSquareRoot);
  console.log(distanceBetweenPoints);
}

// distanceBetweenTwoPoints(2, 4, 5, 0);

function distanceBetweenTwoPoints1(x1, y1, x2, y2) {
  let firstSide = Math.abs(x1 - x2);
  let secondSide = Math.abs(y1 - y2);

  let distanceBetweenPoints = Math.pow(
    firstSide * firstSide + secondSide * secondSide,
    0.5
  );
  console.log(distanceBetweenPoints);
}

distanceBetweenTwoPoints1(2, 4, 5, 0);
