// @ts-check

import _ from 'lodash';
// eslint-disable-next-line object-curly-newline
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)

// VERSION #1

const getHiddenFilesCount = (node) => {
  if (isFile(node) && getName(node).startsWith('.')) {
    return 1;
  }
  if (isFile(node)) {
    return 0;
  }
  const children = getChildren(node);
  const childCount = children.map((child) => getHiddenFilesCount(child));
  return _.sum(childCount);
};

// VERSION #2

const getHiddenFilesCount1 = (node) => {
  if (isFile(node)) {
    return node.name.startsWith('.') ? 1 : 0;
  }
  const children = getChildren(node);
  const hiddenFilesCount = children.map((child) => getHiddenFilesCount1(child));
  return _.sum(hiddenFilesCount);
};
// console.log(getHiddenFilesCount(tree));

export { getHiddenFilesCount, getHiddenFilesCount1 };

// END

/* getHiddenFilesCount.js
Реализуйте и экспортируйте по умолчанию функцию, которая считает количество скрытых
файлов в директории и всех поддиректориях. Скрытым файлом в Linux системах считается файл,
название которого начинается с точки.

Пример
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import getHiddenFilesCount from '../getHiddenFilesCount.js';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

getHiddenFilesCount(tree); // 3 */
