function spiceMustFlow(startingYield) {
  const consumedFromCrew = 26;
  const yieldDecrementation = 10;
  let workingDays = 0;
  let totalExtractedSpice = 0;
  let mineIsExhausted = false;
  let estimatedYield = startingYield;

  if (startingYield < 100) {
    mineIsExhausted = true;
  }

  while (!mineIsExhausted) {
    totalExtractedSpice += estimatedYield - consumedFromCrew;
    workingDays++;
    estimatedYield -= yieldDecrementation;

    if (estimatedYield < 100) {
      mineIsExhausted = true;
      totalExtractedSpice -= consumedFromCrew;
    }
  }

  console.log(workingDays);
  console.log(totalExtractedSpice);
}

// spiceMustFlow(111);
// spiceMustFlow(30); // Case when the source is exhausted at the start itsself
