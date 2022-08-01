let pre = [1, 2, 3, "hello", null];
let newData = ["a", "b", ...pre, "c"];
console.log(newData);

pre = [100, 200, 300];

const sum = (a, b, c) => a + b + c;

console.log(sum(...pre));
