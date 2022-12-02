export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length === 0) return nums;

  return nums.map(item => item * item);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  return (
    words[0].toLowerCase() +
    words
      .slice(1)
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join("")
  );
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  return people.reduce(
    (countSubjects, person) => countSubjects + person.subjects.length,
    0
  );
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for (let menuItem of menu) {
    if (menuItem.ingredients.includes(ingredient)) return true;
  }

  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let dubles = arr1.reduce((acc, item) => {
    if (arr2.includes(item) && !acc.includes(item)) acc.push(item);
    return acc;
  }, []);

  return dubles.sort((a, b) => a - b);
}
