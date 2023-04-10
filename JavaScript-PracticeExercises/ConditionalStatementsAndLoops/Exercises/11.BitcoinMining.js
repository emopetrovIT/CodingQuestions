function bitcoinMining(numbers) {
  const goldPrice = 67.51;
  const bitcoinPrice = 11949.16;

  let totalMoney = 0;
  let dayOfWork = 1;
  let isFirstPurchasedBitcoin = true;
  let purchasedBitcoins = 0;
  let dayOfFirstPurchasedBitcoin = 0;

  for (let i = 0; i < numbers.length; i++) {
    let earnedMoney = numbers[i] * goldPrice;

    if (dayOfWork % 3 === 0) {
      earnedMoney *= 0.7;
    }

    totalMoney += earnedMoney;

    if (totalMoney >= bitcoinPrice) {
      if (isFirstPurchasedBitcoin) {
        dayOfFirstPurchasedBitcoin = dayOfWork;
        isFirstPurchasedBitcoin = false;
      }

      purchasedBitcoins += Math.floor(totalMoney / bitcoinPrice);
      totalMoney = totalMoney % bitcoinPrice;
    }

    dayOfWork++;
  }

  console.log(`Bought bitcoins: ${purchasedBitcoins}`);
  if (purchasedBitcoins > 0) {
    console.log(
      `Day of the first purchased bitcoin: ${dayOfFirstPurchasedBitcoin}`
    );
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);
