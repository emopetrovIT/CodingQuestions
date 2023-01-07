function lowerToUpper(inputChar) {
  let inputCharToLower = String(inputChar).toLowerCase();
  let result = '';

  if (inputCharToLower === inputChar) {
    result = 'lower-case';
  } else {
    result = 'upper-case';
  }
  console.log(result);
}

lowerToUpper('L');
lowerToUpper('a');
