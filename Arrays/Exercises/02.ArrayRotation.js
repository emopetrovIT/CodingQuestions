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

arrayRotation([51, 47, 32, 61, 21], 2);
