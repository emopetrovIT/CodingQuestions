function rightPlace(searchString, character, stringToMatch) {
  let modificatedString = searchString.replace('_', character);

  if (modificatedString === stringToMatch) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}

rightPlace('Str_ng', 'I', 'Strong');
