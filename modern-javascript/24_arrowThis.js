//this context of arrow function

const myObj = {
  runTimeout() {
    setTimeout(() => {
      this.printData(); //bind 없이도 실행가능
    }, 1000);
  },

  printData() {
    console.log("hi code sequsd");
  },
};

myObj.runTimeout();

const el = document.querySelector("p");
el.addEventListener("click", () => {
  console.log(this);
});
