const { onev1, onev2 } = require("./expenseReport");
const fs = require("fs");

// how does jest know about test and expect?
// this looks a bit too magical too me
test("should equal 514267 on testdata", () => {
  let data = `1721
    979
    366
    299
    675
    1456`;
  expect(onev1(data, 2020)).toBe(514579);
  expect(onev2(data, 2020)).toBe(514579);
});

test("should give number from input of data", () => {
  let data = fs.readFileSync("input.txt", "utf-8");

  // v1
  var start = performance.now();
  //do your things
  console.log(onev1(data, 2020));
  var end = performance.now();
  var duration = end - start;
  console.log(`duration ${duration}`);

  // v2
  var start = performance.now();
  //do your things
  console.log(onev2(data, 2020));
  var end = performance.now();
  var duration = end - start;
  console.log(`duration ${duration}`);
});
