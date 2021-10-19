// 产品基类
class Product {
  constructor(name) {
    this.name = name;
  }

  deliver() {
    console.log(`您要的【${this.name}】生产好了`);
  };
}

// 工厂基类：工厂
class Factory {
  // 生产哪种产品又需求方决定
  static createTransport(type) {
    let name;
    switch (type) {
      case 'truck':
        name = '卡车';
        return new Product(name);
      case 'ship':
        name = '轮船';
        return new Product(name);
      default:
        throw new Error('只能生产卡车和轮船两种产品');
    }
  }
}

// 需求方要生产 卡车
Factory.createTransport('truck').deliver(); // 您要的【卡车】生产好了

// 需求方要生产 轮船
Factory.createTransport('ship').deliver(); // 您要的【轮船】生产好了
