function dungeonestDark(input) {
  const intitialHealth = 100;
  let token = input[0];
  let rooms = token.split('|');
  let currentHealth = 100;
  let coins = 0;
  let output = '';
  let playerIsAlive = true;

  for (let roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
    const currentRoomItems = rooms[roomIndex].split(' ');
    let roomItem = currentRoomItems[0];
    let itemImpact = Number(currentRoomItems[1]);

    if (roomItem === 'potion') {
      let healthBoost = itemImpact;
      if (currentHealth + healthBoost > intitialHealth) {
        addedHealth = intitialHealth - currentHealth;
        currentHealth = intitialHealth;
      } else {
        currentHealth += healthBoost;
        addedHealth = healthBoost;
      }

      output += `You healed for ${addedHealth} hp.\n`;
      output += `Current health: ${currentHealth} hp.\n`;
    } else if (roomItem === 'chest') {
      let foundedCoins = itemImpact;
      coins += foundedCoins;
      output += `You found ${foundedCoins} coins.\n`;
    } else {
      let monsterName = roomItem;
      let monstersAtach = itemImpact;

      currentHealth -= monstersAtach;

      if (currentHealth > 0) {
        output += `You slayed ${monsterName}.\n`;
      } else {
        playerIsAlive = false;
        let bestRoom = roomIndex + 1;

        output += `You died! Killed by ${monsterName}.\n`;
        output += `Best room: ${bestRoom}\n`;
        break;
      }
    }
  }

  if (playerIsAlive) {
    output += "You've made it!\n";
    output += `Coins: ${coins}\n`;
    output += `Health: ${currentHealth}\n`;
  }

  console.log(output);
}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
