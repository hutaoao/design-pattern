function Singleton(name) {
  this.name = name;
  this.instance = null;
}

Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

let a = Singleton.getInstance('a');
let b = Singleton.getInstance('b');
console.log(a===b);
