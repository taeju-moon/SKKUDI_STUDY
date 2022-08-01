var list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
  //let을 사용해 버그 해결
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다.");
  });
}
