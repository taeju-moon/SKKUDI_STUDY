//set: 중복없이 유일한 값 저장, 이미 존재하는지 체크할 때 유용.
let mySet = new Set([1, 2]);

mySet.add(6);
mySet.add(7);
mySet.add(6);
console.log(mySet.has(6));
mySet.delete(6);

mySet.forEach((item) => console.log(item));
