/* eslint-disable no-restricted-syntax */
// @ts-check
// BEGIN (write your solution here)

// VERSION #1

const flatten = (arr) => {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
};

// VERSION #2

const flatten1 = (arr) => arr.reduce((acc, elem) => {
  const result = Array.isArray(elem) ? [...acc, ...flatten1(elem)] : [...acc, elem];
  return result;
}, []);

export { flatten, flatten1 };

// END

/* flatten.js
Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.

Для решения задачи нельзя использовать готовые методы для выравнивания массивов.

Примеры
const list = [1, 2, [3, 5], [[4, 3], 2]];

// [1, 2, 3, 5, 4, 3, 2]
flatten(list);
Подсказки
Array.isArray - проверяет, является ли элемент массивом. */
