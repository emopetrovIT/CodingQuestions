function solve(base, heightOfLayer) {
  let totalMarbleQty = 0;
  let totalStoneQty = 0;
  let totalLapisLazuliQty = 0;
  let totalGoldQty = 0;
  let step = 1;

  while (true) {
    if (base === 1 || base === 2) {
      totalGoldQty = base * base * heightOfLayer;
      break;
    }

    let totalArea = base * base * heightOfLayer;
    let lengthOfStoneArea = base - 2;
    let widthOfStoneArea = base - 2;

    let currentStoneQty = lengthOfStoneArea * widthOfStoneArea * heightOfLayer;
    totalStoneQty += currentStoneQty;
    if (step % 5 === 0) {
      let currentLapisLazuliQty = totalArea - currentStoneQty;
      totalLapisLazuliQty += currentLapisLazuliQty;
    } else {
      let currentMarbleQty = totalArea - currentStoneQty;
      totalMarbleQty += currentMarbleQty;
    }

    base -= 2;
    step++;
  }

  console.log(`Stone required: ${Math.ceil(totalStoneQty)}`);
  console.log(`Marble required: ${Math.ceil(totalMarbleQty)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuliQty)}`);
  console.log(`Gold required: ${Math.ceil(totalGoldQty)}`);
  console.log(`Final pyramid height: ${Math.floor(step * heightOfLayer)}`);
}

// solve(11, 0.75);

function solvePyramid(basePyramidLengthOfSide, heightOfLayer) {
  // const basePyramidLengthOfSide = Number(data[0]);
  // let heightOfBlock = Number(data[1]);

  let stoneQty = 0;
  let marbleQty = 0;
  let lapisLazuliQty = 0;
  let goldQty = 0;

  let currentLayerNumber = 1;
  let currentLengthOfLayer = basePyramidLengthOfSide;

  while (true) {
    if (currentLengthOfLayer === 1 || currentLengthOfLayer === 2) {
      goldQty = currentLengthOfLayer * currentLengthOfLayer * heightOfLayer;
      break;
    }

    let totalVolume =
      currentLengthOfLayer * currentLengthOfLayer * heightOfLayer;
    let sideOfInnerStoneFigure = currentLengthOfLayer - 2;
    let innerVolume =
      sideOfInnerStoneFigure * sideOfInnerStoneFigure * heightOfLayer;
    let outerVolume = totalVolume - innerVolume;
    stoneQty += innerVolume;

    if (currentLayerNumber % 5 === 0) {
      lapisLazuliQty += outerVolume;
    } else {
      marbleQty += outerVolume;
    }

    currentLayerNumber++;
    currentLengthOfLayer -= 2;
  }

  console.log(`Stone required: ${Math.ceil(stoneQty)}`);
  console.log(`Marble required: ${Math.ceil(marbleQty)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliQty)}`);
  console.log(`Gold required: ${Math.ceil(goldQty)}`);
  console.log(
    `Final pyramid height: ${Math.floor(currentLayerNumber * heightOfLayer)}`
  );
}

// solvePyramid(23, 0.5);

function pyramidOfKingDjoser(base, blockHeight) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let level = 1;

  while (base !== 1 && base !== 2) {
    let innerLengthOfLayer = base - 2;
    let currentLayerStoneQty =
      innerLengthOfLayer * innerLengthOfLayer * blockHeight;
    stone += currentLayerStoneQty;
    let totalQuantityForLayer = base * base * blockHeight;

    if (level % 5 === 0) {
      lapisLazuli += totalQuantityForLayer - currentLayerStoneQty;
    } else {
      marble += totalQuantityForLayer - currentLayerStoneQty;
    }

    base -= 2;
    level++;
  }

  gold += base * base * blockHeight;

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(blockHeight * level)}`);
}

pyramidOfKingDjoser(12, 1);
