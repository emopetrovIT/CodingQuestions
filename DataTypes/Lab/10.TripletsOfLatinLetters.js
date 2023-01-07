function tripletsOfLatinLetters(input) {
  let num = Number(input);
  let firstLetter = '';
  let secondLetter = '';
  let thirdLetter = '';
  for (let i = 0; i < num; i++) {
    for (let x = 0; x < num; x++) {
      for (let y = 0; y < num; y++) {
        firstLetter = String.fromCharCode(97 + i);
        secondLetter = String.fromCharCode(97 + x);
        thirdLetter = String.fromCharCode(97 + y);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}

tripletsOfLatinLetters('2');
