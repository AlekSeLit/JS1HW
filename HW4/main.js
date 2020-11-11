// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const numberSeparator = {
  unit: 0,
  ten: 0,
  hundred: 0,
  number: +prompt(`Введите число от 0 до 999:`),
};

if (numberSeparator.number <= 9) {
  numberSeparator.unit = numberSeparator.number;
} else if (numberSeparator.number <= 999) {
  numberSeparator.unit = Math.floor(numberSeparator.number % 10);
  numberSeparator.ten = Math.floor((numberSeparator.number % 100) / 10);
  numberSeparator.hundred = Math.floor((numberSeparator.number % 1000) / 100);
} else {
  console.log(`${numberSeparator.number} > 999,введите новое число`);
  numberSeparator.number = +prompt(`Введите число от 0 до 999:`);
}
console.log(numberSeparator);
console.log(
  `В данном числе ${numberSeparator.number} находится ${numberSeparator.hundred} сотен, ${numberSeparator.ten} десяток, ${numberSeparator.unit} единиц`
);

// 2.Продолжить работу с интернет-магазином:В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?Реализуйте такие объекты.Перенести функционал подсчета корзины на объектно-ориентированную базу.На дополнительный плюс - реализовать класс корзины. Свойство - сама корзина (массив). Методы - подсчет стоимости, добавление товара в корзину.

const basket = {
  basketArr: (basketArr = []),
  addProduct(product) {
    let i = 0;
    while (i <= 1) {
      product = +prompt(`Введите сумму товара для добавления в корзину`);
      if (product >= 0) {
        this.basketArr.push(product);
      }
      i = +prompt(`Продолжить покупку? 1 - да, любая клавиша - нет`);
    }
  },
  sumPrice(sumBasket) {
    sumBasket = this.basketArr.reduce(function (sum, current) {
      return sum + current;
    }, 0);
    console.log(`Общая сумма товаров составляет: ${sumBasket} рублей`);
  },
  quantity(sum) {
    sum = this.basketArr.length;
    console.log(`Сумма каждого товара: ${this.basketArr}`);
    console.log(`Количество товаров: ${sum}`);
  },
};
basket.addProduct(), basket.sumPrice(), basket.quantity();

// 3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

console.log(
  `У сущности "Продукт" должен быть уникальный Id по которому можно будет реализовывать различные функции, например как сравнение товаров на характеристики,добавлением скидки на категории товаров у который уникальный Id тоже будет присуствовать`
);
