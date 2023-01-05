function solve(data) {
  let index = 1;
  let username = data[0];
  let password = username.split('').reverse().join('');
  let tryCount = 1;

  while (data.length >= index) {
    let passwordTry = data[index];

    if (password === passwordTry) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      if (tryCount === 4) {
        console.log(`User ${username} blocked!`);
        break;
      }

      console.log('Incorrect password. Try again.');
    }

    index++;
    tryCount++;
  }
}

// solve(['Acer', 'login', 'go', 'let me in', 'recA']);

function logIn(input) {
  let user = input[0];
  let password = user.split('').reverse().join('');
  let countUserInputs = 1;
  let errorMessage = 'Incorrect password. Try again.';
  let successMessage = `User ${user} logged in.`;
  let blockingMessage = `User ${user} blocked!`;
  while (countUserInputs <= 4) {
    // if (input.length - 1 < countUserInputs) {
    //   console.log('Invalid input!');
    //   return;
    // }

    if (input[countUserInputs] === password) {
      console.log(successMessage);
      return;
    } else {
      if (countUserInputs === 4) {
        console.log(blockingMessage);
        break;
      }

      console.log(errorMessage);
    }
    countUserInputs++;
  }
}

logIn(['sunny', 'rainy']);
