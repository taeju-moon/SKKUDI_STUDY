//obj 만들기
const name = "crong";
const age = 33;
const obj = { name, age };
console.log(obj);

function getObj() {
  let name = "crong";
  const getName = () => name;
  const setName = function (newName) {
    name = newName;
  };
  const printName = function () {
    console.log(name);
  };
  return {
    getName,
    setName,
    name,
  };
}

console.log(getObj());
