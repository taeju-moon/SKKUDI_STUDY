const SETTING = {
  name: "LUCKY LOTTO",
  count: 6,
  maxNumber: 45,
};

function getRandomNumber() {
  const { count, maxNumber } = SETTING;
  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * (maxNumber + 1)));
  }
  return numbers;
}

const nums = getRandomNumber();

nums.forEach((num) => console.log(num));
