//map&Weakmap
//Array -> Set, WeakSet
//Object -> Map, Weakmap

//map은 key:value 구조

let wm = new WeakMap();

let myfun = function () {};
//이 함수가 얼마나 실행됐지?를 알려고 할때

wm.set(myfun, 0);

console.log(wm);

let count = 0;
for (let i = 0; i < 10; i++) {
  count = wm.get(myfun);
  count++;
  wm.set(myfun, count);
}

myfun = null; //garbage collecting의 대상이됨

console.log(count);
