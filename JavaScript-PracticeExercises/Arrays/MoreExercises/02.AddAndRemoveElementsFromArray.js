function addAndRemoveElementsFromArray(arr) {
  const numArray = [];
  let number = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'add') {
      numArray.push(number);
    } else if (arr[i] === 'remove') {
      numArray.pop();
    }

    number++;
  }

  if (numArray.length === 0) {
    console.log('Empty');
  } else {
    console.log(numArray.join(' '));
  }
}

addAndRemoveElementsFromArray(['remove', 'remove', 'remove']);
addAndRemoveElementsFromArray(['add', 'add', 'remove', 'add', 'add']);
