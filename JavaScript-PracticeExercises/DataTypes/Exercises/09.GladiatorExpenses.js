function gladiatorExpenses(
  lostGames,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let moneyForEquipment = 0;
  let needsToByeArmor = false;

  for (let game = 1; game <= lostGames; game++) {
    if (game % 2 === 0) {
      moneyForEquipment += helmetPrice;
    }

    if (game % 3 === 0) {
      moneyForEquipment += swordPrice;
    }

    if (game % 2 === 0 && game % 3 === 0) {
      if (needsToByeArmor) {
        moneyForEquipment += armorPrice;
        needsToByeArmor = false;
      } else {
        needsToByeArmor = true;
      }

      moneyForEquipment += shieldPrice;
    }
  }

  console.log(`Gladiator expenses: ${moneyForEquipment.toFixed(2)} aureus`);
}

// gladiatorExpenses(7, 2, 3, 4, 5);
// gladiatorExpenses(23, 12.5, 21.5, 40, 200);

function gladiatorExpenses1(
  lostGames,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let moneyForEquipment = 0;

  for (let game = 1; game <= lostGames; game++) {
    if (game % 2 === 0) {
      moneyForEquipment += helmetPrice;
    }

    if (game % 3 === 0) {
      moneyForEquipment += swordPrice;
    }

    if (game % 6 === 0) {
      moneyForEquipment += shieldPrice;
    }

    if (game % 12 === 0) {
      moneyForEquipment += armorPrice;
    }
  }

  console.log(`Gladiator expenses: ${moneyForEquipment.toFixed(2)} aureus`);
}

gladiatorExpenses1(7, 2, 3, 4, 5);
gladiatorExpenses1(23, 12.5, 21.5, 40, 200);
