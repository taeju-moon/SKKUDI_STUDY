function print() {
  const array = Array.from(arguments);
  return array.filter((elem) => elem.includes("e"));
}

const getArr = print("east", "asia", "eat");

console.log(getArr);
