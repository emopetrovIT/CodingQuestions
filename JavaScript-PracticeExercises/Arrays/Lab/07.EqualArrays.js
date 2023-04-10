function equalArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = +arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = +arr2[i];
  }

  let areEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }

  if (areEqual) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i];
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);

function equalArrays1(arr1, arr2) {
  const firstNumArray = arr1.map((x) => +x);
  const secondNumArray = arr2.map((x) => +x);

  let sum = 0;
  let index = 0;
  let areIdentical = true;

  while (index < firstNumArray.length || index < secondNumArray.length) {
    if (firstNumArray[index] !== secondNumArray[index]) {
      console.log(
        `Arrays are not identical. Found difference at ${index} index`
      );
      areIdentical = false;
      break;
    }

    sum += firstNumArray[index];
    index++;
  }

  if (areIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays1(['1', '2', '3', '4', '5'], ['1', '3', '3', '4', '5']);
