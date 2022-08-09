const data = [
  {
    name: "coffe-been",
    order: true,
    items: ["A", "B", "c"],
  },
  {
    name: "starbucks",
    order: false,
  },
];

//json으로 응답받고, 조작 후 DOM에 추가
//데이터+HTML 문자열의 결합이 필요하기 때문

const template = `<div>welcome ${data[0].name}</div>`;

console.log(template);
