/*
* 使用工厂方法改造之后，如果我们需要添加新的产品，只要在 Factory.prototype 中添加。
* 工厂方法模式关键核心的代码是这句：this instanceof factory：判断 this 是否属于工厂。
*
* Factory 是一个普通函数，this 指向的是全局对象 window，
* 于是会执行 else 中的语句，实例化一个Factory 并传入 type。
* 构造函数实例化后是一个对象，此时 this 是 Factory 的一个实例，
* 所以会执行new this[type]()，返回一个产品实例。
* */

function Factory(type) {
  // 安全的工厂方法
  if (this instanceof Factory) {
    console.log(1)
    return this[type]();
  } else {
    console.log(2)
    return new Factory(type);
  }
}

// 工厂方法函数的原型中设置所有对象的构造函数
Factory.prototype = {
  'truck': function () {
    this.name = '卡车';
  },
  'ship': function () {
    this.name = '轮船';
  },
  'plane': function () {
    this.name = '飞机';
  },
}

Factory.prototype.create = function () {
  console.log(`您要的【${this.name}】生产好了`);
}

// 需求方要生产 卡车
const truck = Factory('truck');
truck.create(); // 您要的【卡车】生产好了

// 需求方要生产 轮船
const ship = new Factory('ship');
ship.create(); // 您要的【轮船】生产好了

// 需求方要生产 飞机
const plane = new Factory('plane');
plane.create(); // 您要的【飞机】生产好了
