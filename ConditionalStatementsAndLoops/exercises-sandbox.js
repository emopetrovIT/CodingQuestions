function solve1(age) {
  let output = '';

  if (age >= 66) {
    output = 'elder';
  } else if (age >= 20) {
    output = 'adult';
  } else if (age >= 14) {
    output = 'teenager';
  } else if (age >= 3) {
    output = 'child';
  } else if (age >= 0) {
    output = 'baby';
  } else {
    output = 'out of bounds';
  }

  console.log(output);
}

// solve1(5);

function nextDay(year, month, day) {
  if (year <= 99) year += 1900;
  let date = new Date();
  date.setDate(date.getDate() + 1);
  let newDate = date.toISOString().split('T')[0];
  [yyyy, mm, dd] = newDate.split('-');
  console.log(`${yyyy}-${removeLeadingZeros(mm)}-${removeLeadingZeros(dd)}`);

  function removeLeadingZeros(str) {
    return str.replace(/^0+/, '');
  }
}

// nextDay(2016, 9, 30);

function solve(number, precision) {
  if (precision > 15) {
    precision = 15;
  }

  console.log(+number.toFixed(precision));
}

// solve2(5.5555, 2);

function solve3(number) {
  let output = '';

  if (number % 10 === 0) {
    output = 'The number is divisible by 10';
  } else if (number % 7 === 0) {
    output = 'The number is divisible by 7';
  } else if (number % 6 === 0) {
    output = 'The number is divisible by 6';
  } else if (number % 3 === 0) {
    output = 'The number is divisible by 3';
  } else if (number % 2 === 0) {
    output = 'The number is divisible by 2';
  } else {
    output = 'Not divisible';
  }

  console.log(output);
}

// solve3(5);

function solve7(n) {
  let output = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      output += i + ' ';
    }

    console.log(output);
    output = '';
  }
}

// solve7(3);

function solve5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

// solve5();

function rounding(number, precision) {
  if (precision >= 15) {
    precision = 15;
  }

  console.log(Number(number.toFixed(precision)));
}

function rounding1(number, precision) {
  if (precision >= 15) {
    precision = 15;
  }

  console.log(parseFloat(number.toFixed(precision)));
}

function rounding2(number, precision) {
  if (precision >= 15) {
    precision = 15;
  }

  console.log(+number.toFixed(precision));
}

function calculatePrice(countPeople, typeOfGroup, dayOfWeek) {
  let totalPrice = 0;
  let price = 0;

  if (typeOfGroup === 'Students') {
    if (dayOfWeek === 'Friday') {
      price = 8.45;
      totalPrice = countPeople * price;
    } else if (dayOfWeek === 'Saturday') {
      price = 9.8;
      totalPrice = countPeople * price;
    } else if (dayOfWeek === 'Sunday') {
      price = 10.46;
      totalPrice = countPeople * price;
    }

    if (countPeople >= 30) {
      totalPrice *= 0.85;
    }
  } else if (typeOfGroup === 'Business') {
    if (countPeople >= 100) {
      countPeople -= 10;
    }

    if (dayOfWeek === 'Friday') {
      price = 10.9;
      totalPrice = countPeople * price;
    } else if (dayOfWeek === 'Saturday') {
      price = 15.6;
      totalPrice = countPeople * price;
    } else if (dayOfWeek === 'Sunday') {
      price = 16;
      totalPrice = countPeople * price;
    }
  } else if (typeOfGroup === 'Regular') {
    if (dayOfWeek === 'Friday') {
      price = 15;
      totalPrice = countPeople * price;
    } else if (dayOfWeek === 'Saturday') {
      price = 20;
      totalPrice = countPeople * price;
    } else if (dayOfWeek === 'Sunday') {
      price = 22.5;
      totalPrice = countPeople * price;
    }

    if (countPeople >= 10 && countPeople <= 20) {
      totalPrice *= 0.95;
    }
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// calculatePrice(40, 'Regular', 'Saturday');

function printAndSum(startNum, endNum) {
  let nums = '';
  let sum = 0;

  for (let i = startNum; i <= endNum; i++) {
    sum += i;
    nums += `${i} `;
  }

  console.log(nums.trimEnd());
  console.log(`Sum: ${sum}`);
}

// printAndSum(50, 60);

function triangleOfNumbers(n) {
  for (let row = 1; row <= n; row++) {
    let result = '';
    for (let col = 1; col <= row; col++) {
      result += row + ' ';
    }

    console.log(result.trimEnd());
  }
}

// triangleOfNumbers(5);

function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
}

// multiplicationTable(5);
