class Cell {
  render(placeToRender) {
    // Генерация ячейки в html
    const cellHTML = document.createElement("div");
    cellHTML.classList.add("cell");

    if (this.snake) {
      // Генерация змейки в html
      cellHTML.classList.add("snake");
    }

    if (this.food) {
      // Генерация еды в html
      cellHTML.innerHTML = "&#9749;";
    }

    placeToRender.appendChild(cellHTML);
  }
}

class Field {
  width = 0;
  height = 0;
  field = [];
  foodExists = false;

  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.createField();
    console.log(this.field);
  }

  createField() {
    // Генерация игрового поля
    const { width, height } = this;
    for (let i = 0; i < width; i++) {
      const row = [];
      for (let j = 0; j < height; j++) {
        row.push(new Cell());
      }
      this.field.push(row);
    }
  }

  checkFoodExistence({ x, y }) {
    //Проверка наличия еды на игровом поле, если ее нет то сгенерировать
    const cell = this.getCell(x, y);
    if (cell) {
      const existence = cell.food;
      if (existence) {
        cell.food = false;
        this.foodExists = false;
      }

      return existence;
    }
    return false;
  }

  generateFood() {
    // Генерация еды на игровом поле
    if (this.foodExists) {
      return;
    }

    const rand = (max) => Math.floor(Math.random() * (max - 1));
    if (rand(15) < 5) {
      // Таймер генерации еды, чем больше значение в rand() тем дольше время появления новой еды
      while (!this.foodExists) {
        const x = rand(this.width);
        const y = rand(this.height);
        const cell = this.getCell(x, y);
        if (cell && !cell.snake) {
          cell.food = true;
          this.foodExists = true;
        }
      }
    }
  }

  render() {
    // Добавление игрового поля на сайт
    const placeToRender = document.querySelector("main");
    placeToRender.innerHTML = "";
    this.field.forEach((row) => {
      const rowHTML = document.createElement("div");
      rowHTML.classList.add("row");

      row.forEach((cell) => {
        cell.render(rowHTML);
      });

      placeToRender.appendChild(rowHTML);
    });
  }

  getCell(x, y) {
    return this.field[y] && this.field[y][x];
  }

  stepOnCell({ x, y }) {
    const newCell = this.getCell(x, y);
    if (newCell && !newCell.snake) {
      newCell.snake = true;
      return true;
    }
    return false;
  }

  clearCell({ x, y }) {
    const newCell = this.getCell(x, y);
    if (newCell) {
      newCell.snake = false;
    }
  }
}

class Snake {
  body = [];
  direction = null;
  fed = false;

  constructor(startX = 0, startY = 0, direction = "up") {
    this.direction = direction;
    this.body = [{ x: Math.floor(startX), y: Math.floor(startY) }];
  }

  changeDirection(newDirection) {
    if (this.direction === "up" || this.direction === "down") {
      if (newDirection === "up" || newDirection === "down") {
        return;
      }
    }
    if (this.direction === "right" || this.direction === "left") {
      if (newDirection === "right" || newDirection === "left") {
        return;
      }
    }

    this.direction = newDirection;
  }

  move() {
    const currentHead = this.body[this.body.length - 1];
    const newCoords = {};

    switch (this.direction) {
      case "right":
        newCoords.x = currentHead.x + 1;
        newCoords.y = currentHead.y;
        break;
      case "left":
        newCoords.x = currentHead.x - 1;
        newCoords.y = currentHead.y;
        break;
      case "up":
        newCoords.x = currentHead.x;
        newCoords.y = currentHead.y - 1;
        break;
      case "down":
        newCoords.x = currentHead.x;
        newCoords.y = currentHead.y + 1;
        break;
    }

    let leaved = {};

    if (!this.fed) {
      leaved = this.body.shift(); // Удаляет первый элемент из массива
    } else {
      this.fed = false;
    }
    this.body.push(newCoords);

    return {
      leaved,
      stepped: newCoords,
    };
  }
}

class Game {
  Field = null;
  Snake = null;

  constructor(width, height) {
    this.setEventListeners();

    this.Field = new Field(width, height);
    this.Snake = new Snake(width / 2, height / 2); // Начальное расположение (центр игрового поля) головы змейки
    console.log(this.Snake);
  }

  setEventListeners() {
    //Функция, для передачи движения с клавиатуры
    const UP = 38; // Значения смотреть из спецификации keydown
    const DOWN = 40;
    const LEFT = 37;
    const RIGHT = 39;

    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case UP:
          this.Snake.changeDirection("up");
          break;
        case DOWN:
          this.Snake.changeDirection("down");
          break;
        case LEFT:
          this.Snake.changeDirection("left");
          break;
        case RIGHT:
          this.Snake.changeDirection("right");
          break;
      }
    });
  }

  start() {
    this.logicLoop = setInterval(() => {
      const { stepped, leaved } = this.Snake.move();

      const foodOnCellExists = this.Field.checkFoodExistence(stepped);
      if (foodOnCellExists) {
        this.Snake.fed = true;
      }

      const result = this.Field.stepOnCell(stepped);
      if (result) {
        this.Field.clearCell(leaved); // Очистка клетки где была змейка
        this.Field.generateFood(); // Генерация в случайном месте еды
        this.Field.render(); // Создание игрового поля
      } else {
        alert(`Game Over`);
        clearInterval(this.logicLoop); // Для однократного вызова 236 строки кода
      }
    }, 500);
  }
}

const MyGame = new Game(
  +prompt(`введите ширину поля от 10 до 15:`),
  +prompt(`введите высоту поля от 10 до 15:`)
); // Начало игры, установка значения игрового поля
MyGame.start(); // Вызов игры
