function rotateArray(arr) {
  let rotationsCount = arr.pop() % arr.length;

  for (let i = 0; i < rotationsCount; i++) {
    let elementToShift = arr.pop();
    arr.unshift(elementToShift);
  }

  console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);

function rotateArray1(arr) {
  let rotationsCount = arr.pop() % arr.length;

  const rotatedStartPart = arr.slice(arr.length - rotationsCount);
  const rotatedEndPart = arr.slice(0, arr.length - rotationsCount);

  const rotated = [].concat(rotatedStartPart, rotatedEndPart);

  console.log(rotated.join(' '));
}

rotateArray1(['1', '2', '3', '4', '2']);
