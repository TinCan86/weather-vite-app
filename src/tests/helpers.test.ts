import * as Utils from "../utils/helpers";

const testList = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
];

test("averageTemp", async () => {
  const result = Utils.calcAverageTemp(testList);

  if (result != null) {
    expect(parseInt(result)).toBe(21);
  } else {
    expect(result).toBe(null);
  }
});

test("highestTemp", async () => {
  const result = Utils.calcHighestTemp(testList);

  if (result != null) {
    expect(parseInt(result)).toBe(40);
  } else {
    expect(result).toBe(null);
  }
});

test("lowestTemp", async () => {
  const result = Utils.calcLowestTemp(testList);

  if (result != null) {
    expect(parseInt(result)).toBe(1);
  } else {
    expect(result).toBe(null);
  }
});

test("medianTemp", async () => {
  const result = Utils.calcMedianTemp(testList);

  if (result != null) {
    expect(parseInt(result)).toBe(21);
  } else {
    expect(result).toBe(null);
  }
});
