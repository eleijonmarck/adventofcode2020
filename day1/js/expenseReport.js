const reportv1 = (data, shouldBe) => {
  let output;
  data.forEach((t) => {
    data.forEach((t2) => {
      const first = parseInt(t) || 0;
      const second = parseInt(t2) || 0;
      const sum = first + second;

      // why does this not work?
      // const sum = parseInt(t) || 0 + parseInt(t2) || 0;
      // but this does?
      // const sum = first + second;

      if (sum === shouldBe) {
        output = [t, t2];
      }
    });
  });
  return output;
};

const reportv2 = (data, shouldBe) => {
  lookedAtDiffs = {};
  let output;
  data.forEach((t) => {
    let diff = shouldBe - t;
    if (parseInt(lookedAtDiffs[diff.toString()]) !== parseInt(t)) {
      lookedAtDiffs[t.toString()] = diff;
      return;
    }
    // console.log(`t ${t}`);
    // console.log(` diff + t shouldBe ${diff} + ${t} = ${diff + t}`);
    output = [diff, t];
  });
  return output;
};

const testData = ["1721", "979", "366", "299", "675", "1456"];
const shouldBe = 2020;

let output = reportv1(testData, shouldBe);
console.log(output);
let outputSum = output[0] + output[1];
if (outputSum === shouldBe) {
  console.log("Yay");
}

output = reportv2(testData, shouldBe);
console.log(output);
outputSum = output[0] + output[1];
if (outputSum == shouldBe) {
  console.log("Yaysecond");
}

// tests succeeded?

let allReportData;
var fs = require("fs");
try {
  var data = fs.readFileSync("./day1/input.txt", "utf8").toString().split("\n");
  allReportData = data;
} catch (e) {
  console.log("Error", e.stack);
}

output = reportv1(allReportData, shouldBe);
console.log(output);
outputSum = parseInt(output[0]) + parseInt(output[1]);
if (outputSum == shouldBe) {
  console.log("Yay full");
}

module.exports = { reportv1, reportv2 };
