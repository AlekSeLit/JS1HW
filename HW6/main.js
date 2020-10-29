// Открытие и закрытие корзины
let buttonBasket = document.querySelector(".header__basket__button");
let divBasket = document.querySelector(".header__basket__items");

buttonBasket.onclick = function () {
  divBasket.classList.toggle("header__basket__close");
};
// БД товаров
const localDataBase = [
  { name: "Branded shoes", price: 300, quantity: 1 },
  { name: "Brand Levi T-Shirts", price: 100, quantity: 1 },
  { name: "Branded T-Shirts", price: 150, quantity: 1 },
  { name: "Leather wallet", price: 50, quantity: 1 },
  { name: "Ems women bag", price: 90, quantity: 1 },
  { name: "Branded cargos", price: 220, quantity: 1 },
];
// Корзина,подсчет стоимости и количества товаров и вывод их
function basket() {
  // class Basket {
  //   _basketArr = [];
  //   constructor(...items) {
  //     console.log(items);
  //     console.log(...items);
  //     this._basketArr.push(...items);
  //   }
  //   addItem(item) {
  //     this._basketArr.push(item);
  //   }
  //   sumPrice() {
  //     return this._basketArr.reduce((result, curItem) => {
  //       return result + curItem.price;
  //     }, 0);
  //   }
  // }

  // class Item {
  //   _name = "";
  //   _price = 0;
  //   _quantity = 1;
  //   get price() {
  //     return this._price;
  //   }
  //   set name(n) {
  //     this._name = n;
  //   }
  //   constructor(name, price) {
  //     this._name = name;
  //     this._price = price;
  //   }
  // }
  // const basketInstance = new Basket();
  // Массивы для хранения данных при нажатии на кнопку...по другому не знаю как вытащить информацию=( Не работает, не знаю что делать..
  const nameArr = [],
    priceArr = [];
  localDataBase.forEach(function (item, id) {
    let buttonBasket = document.querySelector(`#btn-${id}`);
    buttonBasket.addEventListener("click", function () {
      // Добавление элементов товара в корзину HTML
      (divItem = document.createElement("div")),
        (divItemName = document.createElement("p")),
        (divItemPrice = document.createElement("p")),
        (divItemQuantity = document.createElement("p"));
      divItem.classList.toggle(`header__basket__items_item`);
      document.querySelector(".header__basket__items_head").after(divItem);
      divItemName.classList.toggle(`header__basket__items_name`);
      document
        .querySelector(".header__basket__items_item")
        .prepend(divItemName);
      divItemPrice.classList.toggle(`header__basket__items_price`);
      document
        .querySelector(".header__basket__items_item")
        .append(divItemPrice);
      divItemQuantity.classList.toggle(`header__basket__items_quantity`);
      document
        .querySelector(".header__basket__items_item")
        .append(divItemQuantity);
      divItemName.innerText = item.name;
      divItemPrice.innerText = item.price + `$`;
      divItemQuantity.innerText = item.quantity;
      nameArr.push(item.name);
      priceArr.push(item.price);

      totalPrice = priceArr.reduce(function (sum, current) {
        return sum + current;
      }, 0);
      basketTotalPrice.innerHTML = totalPrice + `$`;
      console.log(totalPrice);
      // basketInstance.addItem(new Item(item));
    });
  });
  let totalPrice = priceArr.reduce(function (sum, current) {
    return sum + current;
  }, 0);

  basketTotalPrice = document.querySelector(".header__basket__price");
  console.log(totalPrice);
}
basket();
