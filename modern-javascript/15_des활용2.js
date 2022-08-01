const news = [
  {
    title: "제목",
    message: "메세지",
    newsList: [1, 2, 3, 4],
  },
  {
    title: "제목2",
    message: "메세지2",
    newsList: [-1, -2, -3, -4],
  },
];

function getNewsList([, { newsList }]) {
  console.log(newsList);
}

getNewsList(news);

document
  .querySelector("div")
  .addEventListener("click", ({ target: { value } }) => {
    console.log(value);
  });
