function People(name) {
  this.name = name;
}

let Singleton = (function () {
  let instance;
  return function (name) {
    if (instance) {
      return instance
    }
    return instance = new People(name);
  }
})()

let a = new Singleton('a')
let b = new Singleton('b')
console.log(a === b);
