const onev1 = (input, shouldBe) => {
  let output;
  let numbers = input.split("\n").map((x) => parseInt(x));
  numbers.forEach((t) => {
    numbers.forEach((t2) => {
      const first = parseInt(t) || 0;
      const second = parseInt(t2) || 0;
      const sum = first + second;

      // why does this not work?
      // const sum = parseInt(t) || 0 + parseInt(t2) || 0;
      // but this does?
      // const sum = first + second;

      if (sum === shouldBe) {
        output = t * t2;
      }
    });
  });
  return output;
};

const onev2 = (input, shouldBe) => {
  lookedAtDiffs = {};
  let output;
  let numbers = input.split("\n").map((x) => parseInt(x));
  numbers.forEach((t) => {
    let diff = shouldBe - t;
    if (parseInt(lookedAtDiffs[diff.toString()]) !== parseInt(t)) {
      lookedAtDiffs[t.toString()] = diff;
      return;
    }
    output = diff * t;
  });
  return output;
};

module.exports = { onev1, onev2 };
