function addMark() {
  let newArray = Array.from(arguments); //가짜 배열(arguments)을 진짜 배열로 변환
  let newData = newArray.map((item) => item + "!");

  console.log(newData);
}

addMark(1, 2, 3, 4, 5, 6);
