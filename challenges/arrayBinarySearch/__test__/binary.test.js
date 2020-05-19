"use strict";

const binary = require("../array-binary-search.js");

describe("git the num of the index", () => {
  it("input is an array", () => {
    let testArr = [1, 2, 3, 4];
    expect(Array.isArray(testArr));
  });

  it("check the array lenght", () => {
    let testArr = [1, 2, 3, 4];
    expect(testArr).toHaveLength(4);
  });

  it("check if it retun the index for the num", () => {
    expect(binary([4, 8, 15, 16, 23, 42], 15)).toBe(2);
  });
  it("will return -1 if the num is not in the array", () => {
    expect(binary([4, 8, 15, 16, 23, 42], 17)).toBe(-1);
  });
});
