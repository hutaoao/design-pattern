// 产品基类
class Product {
  constructor(name) {
    this.name = name;
  }

  deliver() {
    console.log(`您要的【${this.name}】生产好了`);
  };
}

// 工厂基类
class Factory {
  create() {}
}

// 卡车
class Truck extends Factory {
  create() {
    return new Product('卡车');
  }
}

// 轮船
class Ship extends Factory {
  create() {
    return new Product('轮船');
  }
}

// 需求方要生产 卡车
new Truck().create().deliver(); // 您要的【卡车】生产好了

// 需求方要生产 轮船
new Ship().create().deliver(); // 您要的【轮船】生产好了


//这时业务扩展，需要生产飞机，只需要新增一种工厂的子类即可：

// 飞机
class Plane extends Factory {
  create() {
    return new Product('飞机');
  }
}

// 需求方要生产 飞机
new Plane().create().deliver(); // 您要的【飞机】生产好了
