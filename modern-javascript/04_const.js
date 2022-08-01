function home() {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana");
}
//const를 사용하더라도 배열과 오브젝트를 변경하는 것은 가능하다.

//immutable array: 리스트 복사
//뒤로 가기&앞으로 가기
const list = ["apple", "orange", "watermelon"];
const list2 = [].concat(list);
console.log(list2 === list);
console.log(list2);
