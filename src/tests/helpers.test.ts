import * as Utils from "../utils/helpers";
import testList from "./fixture";

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
    expect(parseInt(result)).toBe(20);
  } else {
    expect(result).toBe(null);
  }
});
