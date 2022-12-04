import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {
  test("it returns the sum of digits of number", () => {
    expect(sumDigits(102)).toBe(3);
  });

  test("it returns the sum of digits of negative number", () => {
    expect(sumDigits(-102)).toBe(3);
  });

  test("it returns the sum of digits of decimal number", () => {
    expect(sumDigits(10.2)).toBe(3);
  });
});

describe("createRange", () => {
  test("it creates a range of numbers as an array", () => {
    expect(createRange(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(createRange(1, 5, 2)).toEqual([1, 3, 5]);
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  });

  test("it creates a range of numbers as an array with default step = 1", () => {
    expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("getScreentimeAlertList", () => {
  test("it returns array of usernames of users who have used more than 100 minutesof screentime for a given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },

          {
            date: "2019-06-14",
            usage: { mapMyRun: 80, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 80, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);

    expect(getScreentimeAlertList(users, "2019-05-24")).toEqual([]);

    expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([
      "beth_1234",
      "sam_j_1989",
    ]);
  });
});

describe("hexToRGB", () => {
  test("it converts hexadecimal color in the RGB format", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
  });

  test("it converts hexadecimal short form color in the RGB format", () => {
    expect(hexToRGB("#fff")).toBe("rgb(255,255,255)");
  });
});

describe("findWinner", () => {
  test("return winner vertical X", () => {
    const noughtsAndCrosses = [
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"],
    ];

    expect(findWinner(noughtsAndCrosses)).toBe("X");
  });

  test("return winner horisontal X", () => {
    const noughtsAndCrosses = [
      ["X", "X", "X"],
      ["0", null, "0"],
      ["0", null, null],
    ];

    expect(findWinner(noughtsAndCrosses)).toBe("X");
  });

  test("return winner left - right diagonal X", () => {
    const noughtsAndCrosses = [
      ["X", "0", "X"],
      ["0", "X", "0"],
      ["0", null, "X"],
    ];

    expect(findWinner(noughtsAndCrosses)).toBe("X");
  });

  test("return winner right - left diagonal X", () => {
    const noughtsAndCrosses = [
      ["0", "0", "X"],
      ["0", "X", "0"],
      ["X", null, "X"],
    ];

    expect(findWinner(noughtsAndCrosses)).toBe("X");
  });
});
