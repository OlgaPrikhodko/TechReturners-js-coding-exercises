export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const nIndex = nums.findIndex(num => num === n);
  if (nIndex === -1 || nIndex === nums.length - 1) return null;

  return nums[nIndex + 1];
};

export const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  // return {
  //   1: str.split("1").length - 1,
  //   0: (str.match(/0/g) || []).length,
  // };

  return str.split("").reduce(
    (acc, item) => {
      acc[Number(item)]++;
      return acc;
    },
    { 0: 0, 1: 0 }
  );
};

export const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return Number(String(n).split("").reverse().join(""));
};

export const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.flat().reduce((sum, item) => sum + item, 0);
};

export const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;

  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

  return arr;

  // [1,2,3,4]
  // const last = arr.pop();  //4, arr = [1,2,3]
  // arr.push(arr[0]); // [1,2,3,1]
  // arr[0] = last; [4,2,3,1]
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  const searchTermLowerCase = searchTerm.toLowerCase();

  return (
    Object.values(haystack)
      .filter(item => typeof item === "string")
      .findIndex(item => item.toLowerCase().includes(searchTermLowerCase)) >= 0
  );
};

export const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  return str
    .toLowerCase()
    .split(/[^a-z]+/g)
    .reduce((acc, item) => {
      if (item === "") return acc;

      if (item in acc) acc[item]++;
      else acc[item] = 1;

      return acc;
    }, {});
};
