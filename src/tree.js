/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
// @ts-check

import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
// const tree = mkdir('my documents', [
//   mkfile('avatar.jpg', { size: 100 }),
//   mkfile('passport.jpg', { size: 200 }),
//   mkfile('family.jpg', { size: 150 }),
//   mkfile('addresses', { size: 125 }),
//   mkdir('presentations'),
// ]);

// VERSION #1

const compressImages = (tree) => {
  const newName = getName(tree);
  const globalMeta = getMeta(tree);
  const newChildren = _.cloneDeep(getChildren(tree))
    .map((child) => {
      const name = getName(child);
      const meta = _.cloneDeep(getMeta(child));
      if (isFile(child) && Object.prototype.hasOwnProperty.call(meta, 'attributes')) {
        const newMeta = { ...meta };
        return mkfile(name, newMeta);
      }
      if (isFile(child) && child.name.endsWith('.jpg')) {
        const newMeta = { size: meta.size / 2 };
        return mkfile(name, newMeta);
      }
      return child;
    });
  return mkdir(newName, newChildren, globalMeta);
};

const compressImages1 = (tree) => {
  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if (!isFile(child) || !child.name.endsWith('.jpg')) {
      return child;
    }
    const meta = _.cloneDeep(getMeta(child));
    meta.size /= 2;
    return mkfile(name, meta);
  });
  const newMeta = _.cloneDeep(getMeta(tree));
  return mkdir(getName(tree), newChildren, newMeta);
};

export { compressImages, compressImages1 };

// END

/*
tree.js
Реализуйте и экспортируйте функцию compressImages(), которая принимает на вход директорию,
находит внутри нее картинки и "сжимает" их. Под сжиманием понимается уменьшение свойства
size в метаданных в два раза. Функция должна вернуть обновленную директорию со сжатыми
картинками и всеми остальными данными, которые были внутри этой директории.

Картинками считаются все файлы заканчивающиеся на .jpg.

Примеры
const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations')
]);

const newTree = compressImages(tree);
// То же самое, что и tree, но во всех картинках размер уменьшен в два раза */
