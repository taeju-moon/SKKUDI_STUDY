//WeakMap 활용

const wm = new WeakMap();

function Area(height, width) {
  wm.set(this, { height, width });
}

Area.prototype.getArea = function () {
  const { height, width } = wm.get(this);
  return height * width;
};

let myarea = new Area(10, 20);
console.log(myarea.getArea());

console.log(wm.has(myarea));
myarea = null; //garbage
console.log(wm.has(myarea));
