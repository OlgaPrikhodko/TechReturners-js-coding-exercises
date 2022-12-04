import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  areWeCovered,
  createMatrix,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of any number that are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 3, 5])).toBe(8);
  });

  test("works okay with decimal numbers", () => {
    expect(sumMultiples([1, 3.0, 5.0])).toBe(8);
  });

  test("returns 0 if there are no numbers that are multiple 3 or 5", () => {
    expect(sumMultiples([1, 4, 7])).toBe(0);
  });

  test("returns 0 if there is empty array", () => {
    expect(sumMultiples([])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("returns true because contains only characters C, G, T or A characters", () => {
    const dnaString = "AAGATGCCGT";
    expect(isValidDNA(dnaString)).toBe(true);
  });

  test("returns false because contains not only characters C, G, T or A characters", () => {
    const dnaString = "AAGATGCCGTBUBUBU";
    expect(isValidDNA(dnaString)).toBe(false);
  });

  test("returns false because receive empty string", () => {
    const dnaString = "";
    expect(isValidDNA(dnaString)).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("it throws an error if passed not valid DNA", () => {
    expect(() => {
      getComplementaryDNA("BUBUBU");
    }).toThrow("required a valid DNA string");
  });

  test("returns complementary DNA", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("ACTGACTG")).toBe("TGACTGAC");
  });
});

describe("isItPrime", () => {
  test("returns true for prime number", () => {
    expect(isItPrime(71)).toBe(true);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(1697)).toBe(true);
  });

  test("returns false for not prime number", () => {
    expect(isItPrime(15)).toBe(false);
  });

  test("returns false for 1", () => {
    expect(isItPrime(1)).toBe(false);
  });

  test("returns false for negative value", () => {
    expect(isItPrime(-2)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("it returns an array of n arrays, each filled with n items", () => {
    const expectedValue = [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ];
    expect(createMatrix(3, "foo")).toEqual(expectedValue);
  });
});

describe("areWeCovered", () => {
  test("it returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });

  test("returns false if there are staff (< 3) but they are not sheduled to the work", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });

  test("returns true if at least 3 staff members will work at the current day", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday", "Sunday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Maria", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Sunday")).toBe(true);
  });
});
