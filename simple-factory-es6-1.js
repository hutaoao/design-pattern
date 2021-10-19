// 产品基类
class Product {
  constructor(name) {
    this.name = name;
  }

  deliver() {};
}

// 卡车
class Truck extends Product {
  deliver() {
    console.log(`您要的【${this.name}】生产好了`);
  };
}

// 轮船
class Ship extends Product {
  deliver() {
    console.log(`您要的【${this.name}】生产好了`);
  };
}

// 工厂基类：工厂
class Factory {
  // 生产哪种产品又需求方决定
  static createTransport(type) {
    switch (type) {
      case 'truck':
        return new Truck('卡车');
      case 'ship':
        return new Ship('轮船');
      default:
        throw new Error('只能生产卡车和轮船两种产品');
    }
  }
}

// 需求方要生产 卡车
Factory.createTransport('truck').deliver(); // 您要的【卡车】生产好了

// 需求方要生产 轮船
Factory.createTransport('ship').deliver(); // 您要的【轮船】生产好了
