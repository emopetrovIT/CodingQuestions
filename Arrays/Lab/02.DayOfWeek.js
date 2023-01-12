function dayOfWeek(day) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  let result = '';
  if (day >= 1 && day <= 7) {
    result = days[day - 1];
  } else {
    result = 'Invalid day!';
  }

  console.log(result);
}

dayOfWeek(3);
