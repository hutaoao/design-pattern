function Factory(type) {

  // 生产卡车的构造函数（流水线）
  function Truck(name) {
    this.name = name;
    this.deliver = function () {
      console.log(`您要的【${this.name}】生产好了`);
    }
  }

  // 生产轮船的构造函数（流水线）
  function Ship(name) {
    this.name = name;
    this.deliver = function () {
      console.log(`您要的【${this.name}】生产好了`);
    }
  }

  switch (type) {
    case 'truck':
      return new Truck('卡车'); // 返回 卡车 实例
    case 'ship':
      return new Ship('轮船'); // 返回 轮船 实例
    default:
      throw new Error('只能生产卡车和轮船两种产品');
  }
}

// 需求方要生产 卡车
// 卡车实例
const truck = new Factory("truck");
console.log('卡车实例：', truck);
// 交付卡车
truck.deliver();  // 您要的【卡车】生产好了

// 需求方要生产 轮船
// 轮船实例
const ship = Factory("ship");
console.log('轮船实例：', ship);
// 交付 轮船
ship.deliver(); // 您要的【轮船】生产好了
