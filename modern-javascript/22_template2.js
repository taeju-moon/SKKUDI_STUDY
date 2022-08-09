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
  {
    name: "kings-coofefe",
    order: false,
    items: ["A", "B", "C"],
  },
];

function fn(tags, name, items) {
  if (typeof items === "undefined") {
    items = "주문 가능한 상품이 없습니다.";
  }
  return tags[0] + name + tags[1] + items + tags[2];
}

data.forEach((v) => {
  const template = `<div>Welcome ${v.name} !!</div>
      <h2>주문가능항목</h2><div>${v.itmes?.map(
        (item) => `<p>${item}</p>`
      )}</div>`;
  console.log(template);
});
