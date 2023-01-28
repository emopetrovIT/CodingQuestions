function ladybugs(input) {
  const fieldSize = input[0];
  let ladybugsPositions = input[1].split(' ');
  const flyField = new Array(fieldSize).fill(0);
  const isInRange = (index, array) => index < array.length && index >= 0;

  for (let i = 0; i < ladybugsPositions.length; i++) {
    let position = Number(ladybugsPositions[i]);

    if (!isInRange(position, flyField)) {
      continue;
    }

    flyField[position] = 1;
  }

  let counter = 2;
  while (counter < input.length) {
    let operation = input[counter];
    let tokens = operation.split(' ');
    let currentPosition = Number(tokens[0]);
    let direction = tokens[1];
    let flyLength = Number(tokens[2]);
    let searchedLadybug = flyField[currentPosition];
    let ladybugIsMissing = searchedLadybug === 0;

    if (!isInRange(currentPosition, flyField) || ladybugIsMissing) {
      counter++;
      continue;
    }

    flyField[currentPosition] = 0;

    let trackingLadybugFlight = true;
    while (trackingLadybugFlight) {
      if (direction === 'left') {
        currentPosition -= flyLength;
      } else if (direction === 'right') {
        currentPosition += flyLength;
      }

      if (!isInRange(currentPosition, flyField)) {
        trackingLadybugFlight = false;
        break;
      }

      if (flyField[currentPosition] === 0) {
        flyField[currentPosition] = 1;
        trackingLadybugFlight = false;
      }
    }

    counter++;
  }

  console.log(flyField.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([5, '3 -5 -10', '3 left 2', '1 left -2']);
ladybugs([5, '2', '2 left -1']); // in case flylength = 0, the ladybug position should be set to 0;
