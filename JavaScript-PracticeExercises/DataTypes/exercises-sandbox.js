function getInteger() {
  console.log(12.5 / 10.5);

  // ways to take integer value
  console.log(Math.trunc(12.5 / 10.5));
  console.log(Math.floor(12.5 / 10.5));
}
// getInteger();

function getRandomInt(max) {
  let randomInt = Math.floor(Math.random() * max);
  console.log(randomInt);
}

// getRandomInt(10);

function getRandomIntBetweenTwoValuesInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumInRange = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive

  console.log(randomNumInRange);
}

getRandomIntBetweenTwoValuesInclusive(5, 10);
