// Добавить в задачу 1 валидацию на то, чтобы любая сторона была больше 0, если например ширина меньше 0 - выводим ошибку: ${sideName} must be greater than 0`

// Написать класс Square, Rectangle и Triangle

// Перечисление типов фигур
enum FigureType {
  Square = "square",
  Rectangle = "rectangle",
  Triangle = "triangle",
}

// Абстрактный класс Figure
abstract class Figure {
  // Добавление защитного свойства type при создании класса
  constructor(
    protected readonly type: FigureType,
    protected sides: Record<string, number>,
  ) {
    const side = Object.entries(sides).find(([, side]) => side <= 0);
    if (side) {
      throw new Error(`${side[0]} must be greater than 0`);
    }
  }

  // Добавление публичного метода получения type
  getType(): string {
    return this.type;
  }

  // Добавление публичных абстрактный методов для фигур - получение площади и периметра
  abstract getArea(): number;
  abstract getPerimeter(): number;

  // Добавление публичного метода описание класса
  getDescription(): string {
    return this.constructor.name;
  }
}

// Класс Square (квадрат)
class Square extends Figure {
  //  Добавление приватного свойства side
  constructor(private readonly side: number) {
    // Указание типа при создании класса
    super(FigureType.Square, { side });
  }

  // Получение площади
  getArea(): number {
    return this.side ** 2;
  }

  // Получение периметра
  getPerimeter(): number {
    return this.side * 4;
  }

  // Получение описания
  getDescription(): string {
    return `Square with side ${this.side}`;
  }
}

// Класс Rectangle (прямоугольник)
class Rectangle extends Figure {
  //  Добавление приватных свойств ширина и высоты
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    // Указание типа при создании класса
    super(FigureType.Rectangle, { width, height });
  }

  // Получение площади
  getArea(): number {
    return this.height * this.width;
  }

  // Получение периметра
  getPerimeter(): number {
    return (this.height + this.width) * 2;
  }

  // Получение описания
  getDescription(): string {
    return `Rectangle with width ${this.width} and height ${this.height}}`;
  }
}

//Класс Triangle
class Triangle extends Figure {
  //  Добавление приватного свойства side
  constructor(
    private readonly side1: number,
    private readonly side2: number,
    private readonly side3: number,
  ) {
    // Указание типа при создании класса
    super(FigureType.Triangle, { side1, side2, side3 });
  }

  // Получение площади
  getArea(): number {
    const pp = this.getPerimeter() / 2;
    return Math.sqrt(pp * (pp - this.side1) * (pp - this.side2) * (pp - this.side3));
  }

  // Получение периметра
  getPerimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }

  // Получение описания
  getDescription(): string {
    return `Triangle with side1 ${this.side1}, side2 ${this.side2} and side3 ${this.side3}`;
  }
}

// Пример использования
const square = new Square(5);
console.log(square.getArea()); // 25
console.log(square.getPerimeter()); // 20
console.log(square.getType()); // square
console.log(square.getDescription()); // Square with side 5

console.log("-----------");

const rectangle = new Rectangle(4, 6);
console.log(rectangle.getArea()); // 24
console.log(rectangle.getPerimeter()); // 20
console.log(rectangle.getType()); // rectangle
console.log(rectangle.getDescription()); // Rectangle with width 4 and height 6

console.log("-----------");

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea()); // 6
console.log(triangle.getPerimeter()); // 12
console.log(triangle.getType()); // triangle
console.log(triangle.getDescription()); // Triangle with side1 3, side2 4 and side3 5

// const squareErr = new Square(-5);
// const rectangleErr = new Rectangle(4, -6);
const triangleErr = new Triangle(3, -4, 5);

console.log(triangleErr);
