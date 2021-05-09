export const calcAverageTemp = (list: Array<number>) => {
  try {
    const summary = list.reduce((a, b) => a + b, 0);

    const average = summary / 40;

    return Math.round(average).toString();
  } catch (error) {
    console.error(error, "Something went wrong");
    return null;
  }
};

export const calcMedianTemp = (list: Array<number>): string | null => {
  try {
    if (list.length >= 1) {
      // Sorting order ascending
      list = list.sort((a: number, b: number) => a - b);

      // Checking with modulus if list is even
      if (list.length % 2 === 0) {
        // Checking middle value and middle value minus 1 in index and give it only 2 decimal places
        const result = (
          (list[list.length / 2 - 1] + list[list.length / 2]) /
          2
        ).toFixed(2);

        return result.toString();
      } else {
        const result = list[(list.length - 1) / 2].toFixed(2);

        return result.toString();
      }
    } else {
      console.log("Empty list, nothing to count on");
      return null;
    }
  } catch (error) {
    console.error(error, "Something went wrong");
    return null;
  }
};

export const calcHighestTemp = (list: Array<number>) => {
  try {
    return Math.round(Math.max(...list)).toString();
  } catch (error) {
    console.error(error, "Something went wrong");
    return null;
  }
};

export const calcLowestTemp = (list: Array<number>) => {
  try {
    return Math.round(Math.min(...list)).toString();
  } catch (error) {
    console.error(error, "Something went wrong");
    return null;
  }
};
