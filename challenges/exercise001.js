// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.at(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.at(0).toUpperCase() + "." + lastName.at(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  if (vatRate === 0) return originalPrice;

  let vat = (originalPrice * vatRate) / 100;
  if (vat % 1 !== 0) vat = Number(vat.toFixed(2));

  return originalPrice + vat;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  if (reduction === 0) return originalPrice;

  let discount = (originalPrice * reduction) / 100;

  if (discount % 1 !== 0) discount = Number(discount.toFixed(2));

  return originalPrice - discount;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  const halfLength = str.length / 2;

  if (str.length % 2 === 1) return str[Math.floor(halfLength)];

  return str.slice(halfLength - 1, halfLength + 1);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.map(word => reverseWord(word));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let countUsers = 0;
  users.forEach(user => {
    if (user.type === "Linux") countUsers += 1;
  });

  return countUsers;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const sum = scores.reduce((acc, item) => acc + item);
  let meanScore = sum / scores.length;

  if (meanScore % 1 === 0) return meanScore;

  return Number(meanScore.toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 15 === 0) return "fizzbuzz";
  if (n % 3 === 0) return "fizz";
  if (n % 5 === 0) return "buzz";

  return n;
}
