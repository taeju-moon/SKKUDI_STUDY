var name = "global var";

//var: 함수 스코프
//let, const: 블록 스코프
function home() {
  var home = "homevar";
  for (var i = 0; i < 100; i++) {}
  console.log(i);

  if (true) {
    let myif = "myif";
  }
  console.log(myif); //error
}

home();
