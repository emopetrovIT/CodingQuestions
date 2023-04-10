function poundsToDollars(pounds) {
  const poundValue = 1.31;

  let dollars = pounds * poundValue;
  console.log(dollars.toFixed(3));
}

poundsToDollars(80);
poundsToDollars(39);
