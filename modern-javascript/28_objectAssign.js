//Object Assign Method

const healthObj = {
  showHealth: function () {
    console.log("오늘운동시간: " + this.healthTime);
  },
};

const myHealth = Object.assign(Object.create(healthObj), {
  name: "crong",
  lastTime: "11:20",
}); //myHealth에서는 prototype에 함수들이 선언됨(Object.create)

console.log(myHealth);
