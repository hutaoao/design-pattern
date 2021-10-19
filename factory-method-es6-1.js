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

// 工厂基类
class Factory {
  create() {}
}

// 卡车
class TruckFactory extends Factory {
  create() {
    return new Truck('卡车');
  }
}

// 轮船
class ShipFactory extends Factory {
  create() {
    return new Ship('轮船');
  }
}

// 需求方要生产 卡车
new TruckFactory().create().deliver(); // 您要的【卡车】生产好了

// 需求方要生产 轮船
new ShipFactory().create().deliver(); // 您要的【轮船】生产好了


//这时业务扩展，需要新增飞机，只需要新增一种产品的子类和一种工厂的子类即可：

// 飞机子类
class Plane extends Product {
  deliver() {
    console.log(`您要的【${this.name}】生产好了`);
  };
}

// 飞机工厂子类
class PlaneFactory extends Factory {
  create() {
    return new Plane('飞机');
  }
}

// 需求方要生产 飞机
new PlaneFactory().create().deliver(); // 您要的【飞机】生产好了
