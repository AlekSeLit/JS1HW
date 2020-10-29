function basket() {
  class Basket {
    _basketArr = [];
    constructor(...items) {
      console.log(items);
      console.log(...items);
      this._basketArr.push(...items);
    }
    addItem(item) {
      this._basketArr.push(item);
    }
    sumPrice() {
      return this._basketArr.reduce((result, curItem) => {
        return result + curItem.price;
      }, 0);
    }
    quantity(sum) {
      return (sum = this._basketArr.length);
    }
  }

  class Item {
    _name = "";
    _price = 0;
    get price() {
      return this._price;
    }
    set name(n) {
      this._name = n;
    }
    constructor(name, price) {
      this._name = name;
      this._price = price;
    }
  }
  const CartInstance = new Basket(
    new Item("Branded shoes", 300),
    new Item("Brand Levi T-Shirts", 100)
  );
  let totalPrice = CartInstance.sumPrice(),
    quantity = CartInstance.quantity();
  console.log(totalPrice);
  console.log(quantity);
}
basket();
