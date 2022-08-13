//proxy
//new Proxy(object 대상, handler)

const proxy = new Proxy(
  { name: "crong", changedTime: 0 },
  {
    get: function (target, property, receiver) {
      //receiver === proxy 객체 자체
      console.log("get value");
      return target[property];
    },
    set: function (target, property, value) {
      //target == { name: "crong", changedTime: 0 }
      console.log("change value");
      target[property] = value;
      target.changedTime++;
    },
  }
);
proxy.name = "응애";
proxy.name = "응애2";
console.log(proxy.changedTime);
