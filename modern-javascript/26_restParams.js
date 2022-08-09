function checkNum(...args) {
  const result = args.every((v) => typeof v === "number");
  return result;
}

const result = checkNum(10, 2, 3, 4, 5, "555");
console.log(result);
