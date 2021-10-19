let instance = null;
let getInstance = function (arg) {
  if (!instance) {
    instance = arg;
  }
  return instance;
}

let a = getInstance('a');
let b = getInstance('b');
console.log(a === b);
