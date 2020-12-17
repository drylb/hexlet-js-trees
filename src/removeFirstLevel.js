// @ts-check

// BEGIN (write your solution here)

// VERSION #1

const removeFirstLevel = (tree) => {
  const firstLevel = tree.reduce((acc, item) => {
    if (Array.isArray(item)) {
      item.forEach((elem) => acc.push(elem));
    }
    return acc;
  }, []);
  return firstLevel;
};

// VERSION #2

const removeFirstLevel1 = (tree) => tree.filter(Array.isArray).flat();

export { removeFirstLevel, removeFirstLevel1 };

// END

/* В этом задании под деревом понимается любой массив элементов,
которые в свою очередьмогут быть также деревьями (массивами). Пример:

[
  3, // лист
  [5, 3], // узел
  [[2]] // узел
]
Больше примеров в тестах.

removeFirstLevel.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход дерево,
и возвращает новое, элементами которого являются дети вложенных узлов (см. пример).

Примеры
import removeFirstLevel from '../removeFirstLevel.js';

// Второй уровень тут: 5, 3, 4
const tree1 = [[5], 1, [3, 4]];
removeFirstLevel(tree1); // [5, 3, 4]

const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
removeFirstLevel(tree2);
// [3, 5, [4, 3], 2]
Подсказки
Array.prototype.flat() - возвращает новый массив, в котором все элементы вложенных подмассивов
были рекурсивно "подняты" на указанный уровень.
Array.isArray() - проверяет, является ли элемент массивом. */
