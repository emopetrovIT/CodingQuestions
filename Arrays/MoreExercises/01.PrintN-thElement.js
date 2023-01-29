function printNthElement(input) {
  let nStep = Number(input[input.length - 1]);
  input.pop();

  const everyNthElement = [];
  for (let i = 0; i <= input.length; i += nStep) {
    everyNthElement.push(input[i]);
  }
  console.log(everyNthElement.join(' '));
}

printNthElement([1, 2, 3, 4, 5, 6, 2]);

function printNthElement1(input) {
  let step = Number(input[input.length - 1]);

  // function every_nth  - gets every nth elemment, but I need nth element  starting from the first one. That's the reason why it is not correct.
  // const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

  //correct functional solution
  return input
    .filter((e, i) => i % step === 0 && i !== input.length - 1)
    .join(' ');
}

printNthElement1([1, 2, 3, 4, 5, 6, 2]);
