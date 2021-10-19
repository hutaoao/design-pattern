class People {
  constructor(name) {
    if (!People.instance) {
      this.name = name;
      People.instance = this;
    }
    return People.instance;
  }
}

const a = new People('a');
const b = new People('b');
console.log(a === b);
