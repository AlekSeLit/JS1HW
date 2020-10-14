// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

let primeNumber = 0;
const primeNumberArr = [];
while (primeNumber <= 100) {
  if (primeNumber < 2) {
    primeNumber++;
  } else {
    let nextNumber = 2;
    let i = 2;
    while (primeNumber % i !== 0) {
      i++;
      nextNumber++;
    }
    if (nextNumber == primeNumber) {
      primeNumberArr.push(nextNumber);
    }
  }
  primeNumber++;
}
console.log(primeNumberArr);

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:a) Организовать такой массив для хранения товаров в корзине; b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function basket() {
  const basketArr = [];
  for (let i = 0; i < 4; i++) {
    let newCount = Math.round(Math.random() * 15000);
    basketArr.push(newCount);
  }
  console.log(basketArr);
  let sumBasket = 0;
  for (let i = 0; i < basketArr.length; i++) {
    sumBasket += parseInt(basketArr[i]);
  }
  console.log(`Сумма товаров составляет: ${sumBasket} местной валюты`);
}
basket();

// 3*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: for(…){// здесь пусто}

const numberIArr = [];
for (let i = -1; i < 9; i++, numberIArr.push(i)) {}
console.log(numberIArr);

// 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5.
// x
// xx
// xxx
// xxxx
// xxxxx

const arrPyr = [];
let topPyr = 0;
while (topPyr < 20) {
  topPyr++;
  arrPyr.push("x");
  console.log(arrPyr);
}
