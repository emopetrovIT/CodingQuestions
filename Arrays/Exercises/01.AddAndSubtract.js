function addAndSubtract(arr) {
  let sumOfOriginalArray = 0;
  let sumOfModifiedArray = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOfOriginalArray += arr[i];

    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }

    sumOfModifiedArray += arr[i];
  }

  console.log(arr);
  console.log(sumOfOriginalArray);
  console.log(sumOfModifiedArray);
}

addAndSubtract([5, 15, 23, 56, 35]);

function addAndSubtract1(arr) {
  let sumOfOriginalArray = 0;
  let sumOfModifiedArray = 0;
  const modifiedArray = [];

  for (let i in arr) {
    sumOfOriginalArray += arr[i];
    let index = Number(i);

    if (arr[index] % 2 === 0) {
      modifiedArray.push(arr[index] + index);
    } else {
      modifiedArray.push(arr[index] - index);
    }

    sumOfModifiedArray += modifiedArray[index];
  }

  console.log(modifiedArray);
  console.log(sumOfOriginalArray);
  console.log(sumOfModifiedArray);
}

addAndSubtract1([5, 15, 23, 56, 35]);
