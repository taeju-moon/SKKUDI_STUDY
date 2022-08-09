//weakser
//참조를 가지고 있는 객체만 저장 가능

let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = { arr, arr2 };
let ws = new WeakSet();

arr = null; //garbage collection 대상

ws.add(arr);
//ws.add(111); invalid type
//Wws.add("111"); invalid type
ws.add(arr2);
ws.add(obj);

console.log(ws);

//가비지 콜렉션에 대해 발표
