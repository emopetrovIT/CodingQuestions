function condenseArrayToNumber(nums) {
  while (nums.length > 1) {
    const condensedNums = [];

    for (let i = 0; i < nums.length - 1; i++) {
      condensedNums[i] = nums[i] + nums[i + 1];
    }

    nums = condensedNums;
  }

  console.log(nums.join());
}

condenseArrayToNumber([2, 10, 3]);
