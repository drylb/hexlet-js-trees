// @ts-check

// BEGIN (write your solution here)

const convert = (arr) => arr.reduce((acc, item) => {
  const [key, value] = item;
  const newProp = Array.isArray(value) ? convert(value) : value;
  return { ...acc, [key]: newProp };
}, {});

export default convert;

// END

/* convert.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
массив определённой структуры и возвращает объект, полученный из этого массива.

Массив устроен таким образом, что с помощью него можно представлять ассоциативные
массивы. Каждое значение внутри него — это массив из двух элементов, где первый
элемент — ключ, а второй — значение. В свою очередь, если значение тоже является
массивом, то считается, что это вложенное представление ассоциативного массива.
Другими словами, любой массив внутри исходного массива всегда рассматривается как
данные, которые нужно конвертировать в объект.

convert([]); // {}
convert([['key', 'value']]); // { key: 'value' }
convert([['key', 'value'], ['key2', 'value2']]); // { key: 'value', key2: 'value2' }

convert([
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2']
]);
// { key: { key2: 'anotherValue' }, key2: 'value2' } */
