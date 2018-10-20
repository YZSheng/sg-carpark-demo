const isEven = num => typeof num === "number" &&
    !isNaN(num) &&
    !(num % 2);

const filterByEven = arr => arr.filter(isEven);

describe("filtering an array by even numbers", () => {
  test("an empty array result in an empty array", () => {
    expect(filterByEven([])).toEqual([]);
  });

  test("array with one even number", () => {
    expect(filterByEven([0])).toEqual([0]);
  });

  test("array with two even numbers", () => {
    expect(filterByEven([0, 2])).toEqual([0, 2]);
  });

  test("array with one odd number", () => {
    expect(filterByEven([1])).toEqual([]);
  });

  test("array with two odd numbers", () => {
    expect(filterByEven([1, 1])).toEqual([]);
  });

  test("array with one odd number with one even number", () => {
    expect(filterByEven([1, 2])).toEqual([2]);
  });

  test("array with a long list of number", () => {
    expect(filterByEven([1, 1, 3, 4, 5, 6, 10, 11])).toEqual([4, 6, 10]);
  });

  test("array with a invalid numbers", () => {
    expect(filterByEven([1, NaN, null, undefined, {}])).toEqual([]);
  });
});
