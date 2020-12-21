/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
// @ts-check

import path from 'path';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)

// VERSION #1

const findFilesByName = (tree, pattern) => {
  const iter = (node, patt, ancestry) => {
    const name = getName(node);
    if (isFile(node)) {
      return name.includes(patt) ? `${ancestry}/${name}` : '';
    }
    const children = getChildren(node);
    if (children.length === 0) {
      return [];
    }
    const deepCheck = children
      .flatMap((child) => iter(child, patt, path.join(`${ancestry}/${name}`)));
    return deepCheck.filter((child) => child.length > 0);
  };
  return iter(tree, pattern, '');
};

// VERSION #2

const findFilesByName1 = (tree, pattern) => {
  const iter = (node, ancestry) => {
    const name = getName(node);
    const newAncestry = path.join(ancestry, name);
    if (isFile(node)) {
      return name.includes(pattern) ? newAncestry : [];
    }
    const children = getChildren(node);
    const find = children.flatMap((child) => iter(child, newAncestry));
    return find;
  };
  return iter(tree, '');
};

export { findFilesByName, findFilesByName1 };

// END

/* findFilesByName.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и
подстроку, а возвращает список файлов, имена которых содержат эту подстроку.
Функция должна вернуть полные пути до файлов.

Примеры
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import findFilesByName from '../findFilesByName.js';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

findFilesByName(tree, 'co');
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
Подсказки:
Для реализации этой логики вам понадобится аккумулятор, в котором будет
храниться путь от корня до текущего узла. При проваливании внутрь директорий
к нему добавляется имя текущей директории. В остальном логика работы идентична примеру из теории.
Переменную, содержащую внутри себя путь от корня до текущего узла, можно назвать ancestry.
Для построения путей используйте функцию path.join().
Проверку вхождения строк можно делать с помощью функции str.includes(). */
