const { timeStamp } = require("console");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const one = require("./expenseReport");

// how does jest know about test and expect?
// this looks a bit too magical too me
test("should equal 514267", () => {
  let data = `1721
    979
    366
    299
    675
    1456`;
  expect(one(data, 2020)).toBe(514579);
});
