function commonElements(arr1, arr2) {
  const uniqueElements = new Set();

  for (let i = 0; i < arr1.length; i++) {
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[i] === arr2[y]) {
        let commonElement = arr1[i];

        if (!uniqueElements.has(commonElement)) {
          console.log(arr1[i]);
        }
        uniqueElements.add(commonElement);
      }
    }
  }
}

commonElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2', 'hello']
);

function commonElements1(arr1, arr2) {
  const uniqueElements = new Set();

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      let commonElement = arr1[i];
      if (!uniqueElements.has(commonElement)) {
        console.log(arr1[i]);
      }
      uniqueElements.add(commonElement);
    }
  }
}

commonElements1(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2', 'hello']
);
