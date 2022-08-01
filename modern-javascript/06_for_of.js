var data = [1, 2, "", null];

data.forEach((elem) => console.log(elem));

Array.prototype.getIndex = function () {};

//for ~ in: object type을 순회할때 사용함
for (let value in data) {
  console.log(value);
}

//for ~ of: 배열이나 문자열을 순회할때 사용함.
for (let value of data) {
  console.log(value);
}
