export const calcAverageTemp = (list: number[]) => {
  try {
    const summary = list.reduce((a, b) => a + b, 0);

    const average = summary / 40;

    return Math.round(average).toString();
  } catch (error) {
    console.log(error, "Something went wrong");
    return null;
  }
};

export const calcMedianTemp = (list: number[]) => {
  try {
    // change place on a - b for desc
    const sorted = list.sort((a, b) => a - b); // ascending

    const twoMedianValues = sorted[19] + sorted[20];
    const median = twoMedianValues / 2;

    return Math.round(median).toString();
  } catch (error) {
    console.log(error, "Something went wrong");
    return null;
  }
};

export const calcHighestTemp = (list: number[]) => {
  try {
    return Math.round(Math.max(...list)).toString();
  } catch (error) {
    console.log(error, "Something went wrong");
    return null;
  }
};

export const calcLowestTemp = (list: number[]) => {
  try {
    return Math.round(Math.min(...list)).toString();
  } catch (error) {
    console.log(error, "Something went wrong");
    return null;
  }
};
