function charsToString(firstChar, secondChar, thirdChar) {
  let chars = [firstChar, secondChar, thirdChar];
  let resultString = chars.join('');
  resultString.concat(chars);

  console.log(resultString);
}

charsToString('a', 'b', 'c');

function charsToString1(firstChar, secondChar, thirdChar) {
  let resultArray = [firstChar, secondChar, thirdChar];
  resultArray.concat(resultArray);

  console.log(resultArray.join(''));
}

charsToString1('a', 'b', 'c');

function charsToString2(firstChar, secondChar, thirdChar) {
  let resultString = '' + firstChar + secondChar + thirdChar;

  console.log(resultString);
}

charsToString('a', 'b', 'c');

// if input is different type
function charsToString3(firstChar, secondChar, thirdChar) {
  let resultString = String(firstChar) + secondChar + thirdChar;

  console.log(resultString);
}

charsToString3(1, 2, 3);
