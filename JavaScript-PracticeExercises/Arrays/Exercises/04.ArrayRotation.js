function arrayRotation(arr, rotations) {
  for (let i = 1; i <= rotations; i++) {
    // I need to store first num, because I use the same reference of array
    let lastNum = arr[0];
    for (let x = 0; x < arr.length - 1; x++) {
      arr[x] = arr[x + 1];
    }

    arr[arr.length - 1] = lastNum;
  }

  console.log(arr.join(' '));
}

// arrayRotation([51, 47, 32, 61, 21], 2);

function arrayRotation1(arr, rotations) {
  rotations %= arr.length;
  let firstIndexForFinalRotation = rotations;
  const startPart = arr.slice(firstIndexForFinalRotation);
  const finalPart = arr.slice(0, firstIndexForFinalRotation);

  // first way to concat two arrays
  // const rotated = Array.prototype.concat.call(startPart, finalPart);
  // second way
  // const rotated1 = startPart.concat(finalPart);
  // third way
  const rotatedArray = [...startPart, ...finalPart];

  // console.log(rotated.join(' '));
  // console.log(rotated1.join(' '));
  console.log(rotatedArray.join(' '));
}

// arrayRotation1([51, 47, 32, 61, 21], 2);

function arrayRotation2(arr, rotations) {
  rotations %= arr.length;
  let firstIndexForFinalRotation = rotations;
  const startPart = arr.slice(firstIndexForFinalRotation);
  const finalPart = arr.slice(0, firstIndexForFinalRotation);

  const rotated = finalPart.reduce((arr, item) => {
    arr.push(item);
    return arr;
  }, startPart);

  console.log(rotated.join(' '));
}

// arrayRotation2([51, 47, 32, 61, 21], 2);

function arrayRotation3(arr, rotations) {
  let finalRotationStartIndexer = rotations % arr.length;

  const endPartFinalRotation = arr.splice(0, finalRotationStartIndexer);
  arr.push(...endPartFinalRotation);

  console.log(arr.join(' '));
}

// arrayRotation3([51, 47, 32, 61, 21], 2);

function arrayRotation4(arr, rotations) {
  rotations %= arr.length;

  for (let i = 0; i < rotations; i++) {
    let firstItem = arr.shift();
    arr.push(firstItem);
  }

  console.log(arr.join(' '));
}

arrayRotation4([51, 47, 32, 61, 21], 2);
