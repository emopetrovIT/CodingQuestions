function maxNumber(arr) {
  let lastNumber = arr[arr.length - 1];
  const sortedArray = [].concat(arr).sort((a, b) => b - a);
  let highestPeak = sortedArray[0];
  let lowestPeak = lastNumber;

  const peaksArray = [lowestPeak];

  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lowestPeak) {
      if (arr[i] === highestPeak) {
        peaksArray.push(highestPeak);
        break;
      }

      let nextLowestPeak = arr[i];
      lowestPeak = nextLowestPeak;
      peaksArray.push(lowestPeak);
    }
  }

  console.log(peaksArray.reverse().join(' '));
}

// maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([51, 47, 32, 61, 21]);
