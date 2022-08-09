//ES6 Class
function Health(name) {
  this.name = name;
}

Health.prototype.showHealth = function () {
  console.log(this.name);
};

const h = new Health("crong");
h.showHealth();

class Health2 {
  constructor(name) {
    this.name = name;
  }
  showHealth() {
    console.log(this.name);
  }
}

const h2 = new Health("crong2");
h2.showHealth();
