function requiredReading(numberOfPages, pagesPerHour, days) {
  let totalHours = numberOfPages / pagesPerHour;
  let hoursPerDay = totalHours / days;

  console.log(hoursPerDay);
}

requiredReading(200, 50, 4);
