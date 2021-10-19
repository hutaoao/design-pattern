function Singleton(Obj) {
  let instance;
  return function () {
    if (instance) {
      return instance;
    }
    return instance = new Obj(arguments);
  }
}

function People(name) {
  this.name = name;
}

function Animal(name) {
  this.name = name;
}

let peopleSingleton = Singleton(People);
let animalSingleton = Singleton(Animal);

let a = new peopleSingleton('a');
let b = new peopleSingleton('b');
console.log(a === b);


let A = new animalSingleton('A');
let B = new animalSingleton('B');
console.log(A === B);
