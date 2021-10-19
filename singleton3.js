let Singleton = (function () {
  let instance;
  return function (name) {
    if (instance) {
      return instance;
    }
    this.name = name;
    return instance = this;
  }
})()

let a = new Singleton('a');
let b = new Singleton('b');
console.log(a === b);
