function Factory(type) {
  // 生产卡车/轮船的构造函数（流水线）
  function Line(name) {
    this.name = name;
    this.deliver = function () {
      console.log(`您要的【${this.name}】生产好了`);
    }
  }

  let name;
  switch (type) {
    case 'truck':
      name = '卡车';
      return new Line(name);
    case 'ship':
      name = '轮船';
      return new Line(name);
    default:
      throw new Error('只能生产卡车和轮船两种产品');
  }
}

// 需求方要生产 卡车
// 卡车实例
const truck = Factory("truck");
console.log('卡车实例：', truck);
// 交付卡车
truck.deliver();  // 您要的【卡车】生产好了

// 需求方要生产 轮船
// 轮船实例
const ship = Factory("ship");
console.log('轮船实例：', ship);
// 交付 轮船
ship.deliver(); // 您要的【轮船】生产好了
