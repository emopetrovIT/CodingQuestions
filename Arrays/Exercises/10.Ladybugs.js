function ladybugs(input) {
  const fieldSize = input[0];

  let indexPositionsOfLadybugs = input[1].split(' ');
  const flyField = new Array(fieldSize).fill(0);

  for (let i = 0; i < indexPositionsOfLadybugs.length; i++) {
    let currentLadybugIndexPosition = Number(indexPositionsOfLadybugs[i]);

    if (
      currentLadybugIndexPosition >= flyField.length ||
      currentLadybugIndexPosition < 0
    ) {
      continue;
    }

    flyField[currentLadybugIndexPosition] = 1;
  }

  let counter = 2;
  let operation = input[counter];
  while (counter < input.length) {
    operation = input[counter];
    let tokens = operation.split(' ');
    let currentLadybugPosition = Number(tokens[0]);
    let direction = tokens[1];
    let flyLength = Number(tokens[2]);

    let ladybugLandOn = false;
    let flyOutsideOfField = false;
    // checks if index is valid
    const isInRange = () => {
      return (
        currentLadybugPosition < flyField.length && currentLadybugPosition >= 0
      );
    };
    // checks if given ladybug exist at given position
    let givenPositionIsEmpty = flyField[currentLadybugPosition] === 0;

    if (!isInRange() || givenPositionIsEmpty) {
      break;
    } else {
      flyField[currentLadybugPosition] = 0;
    }

    while (!ladybugLandOn && !flyOutsideOfField) {
      if (direction === 'left') {
        currentLadybugPosition -= flyLength;
      } else if (direction === 'right') {
        currentLadybugPosition += flyLength;
      }

      if (!isInRange()) {
        flyOutsideOfField = true;
        break;
      }

      if (flyField[currentLadybugPosition] === 0) {
        flyField[currentLadybugPosition] = 1;
        ladybugLandOn = true;
      }
    }

    counter++;
  }

  console.log(flyField.join(' '));
}

// ladybugs([3, '0 1', '0 right 1', '2 right 1']);
// ladybugs([5, '3', '3 left 2', '1 left -2']);
// ladybugs([5, '3 -5 -10', '3 left 2', '1 left -2']);
ladybugs([10, '2 3 4', '2 right 2']);
