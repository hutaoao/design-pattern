function AbstractFactory(subType, superType) {
  if (typeof AbstractFactory[superType] === 'function') {
    /*
      如果让subType.prototype直接指向supType
      那么对subType.prototype的任何修改都会影响supType
      所以借用一个空对象(缓存类)完成继承
    */

    // 缓存类
    function F() {}

    //继承父类属性和方法
    F.prototype = new AbstractFactory[superType]();
    //将子类 constructor 指向子类（自己）
    subType.constructor = superType;
    //子类原型继承缓存类（父类）
    subType.prototype = new F();
  } else {
    //不存在该抽象类抛出错误
    throw new Error('抽象类不存在')
  }
}

// 水果 抽象类
AbstractFactory.fruitType = function () {
  this.type = '水果';
}

AbstractFactory.fruitType.prototype = {
  showName: function () {
    throw new Error('fruitType 抽象方法 showName 不能调用');
  }
}

// 蔬菜 抽象类
AbstractFactory.vegetableType = function () {
  this.type = '蔬菜';
}

AbstractFactory.vegetableType.prototype = {
  showName: function () {
    throw new Error('vegetableType 抽象方法 showName 不能调用');
  }
}


// 定义水果具体类
function Fruit(name) {
  this.name = name;
}

// 继承
AbstractFactory(Fruit, 'fruitType');
// 实现抽象方法
Fruit.prototype.sayName = function () {
  console.log('我是' + this.name);
}

// 实例化水果
const apple = new Fruit('苹果');
console.log(apple.type); // "水果"
apple.sayName(); // "我是苹果"
