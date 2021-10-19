// 唯一的抽象工厂类：我们的总公司，提供2个抽象方法，分别是createTruck 和 createShip
class Factory {
  createTruck() {}

  createShip() {}
}

// 具体工厂：A品牌工厂（能生产卡车和轮船）
class AFactory extends Factory {
  createTruck() {
    return new ATruck('卡车');
  }

  createShip() {
    return new AShip('轮船');
  }
}

// 具体工厂：B品牌工厂（能生产卡车和轮船）
class BFactory extends Factory {
  createTruck() {
    return new BTruck('卡车');
  }

  createShip() {
    return new BShip('轮船');
  }
}

// 第一个抽象产品类：卡车
class Truck {
  constructor(name) {
    this.name = name;
  }

  deliver() {
  }
}

// A品牌的卡车
class ATruck extends Truck {
  deliver() {
    console.log(`您要的 A 型号【${this.name}】生产好了`);
  }
}

// B品牌的卡车
class BTruck extends Truck {
  deliver() {
    console.log(`您要的 B 型号【${this.name}】生产好了`);
  }
}

// 第二个抽象产品类：轮船
class Ship {
  constructor(name) {
    this.name = name;
  }

  deliver() {
  }
}

// A品牌的轮船
class AShip extends Ship {
  deliver() {
    console.log(`您要的 A 型号【${this.name}】生产好了`);
  }
}

// B品牌的轮船
class BShip extends Ship {
  deliver() {
    console.log(`您要的 B 型号【${this.name}】生产好了`);
  }
}


// 需求者只需关心抽象工厂类（总公司），如选择 A品牌卡车
new AFactory().createTruck().deliver(); // 您要的 A 型号【卡车】生产好了

// 需求者只需关心抽象工厂类，如选择 B品牌轮船
new BFactory().createShip().deliver(); // 您要的 B 型号【轮船】生产好了
