// @ts-check

import {
  // eslint-disable-next-line no-unused-vars
  mkdir, mkfile, isFile, getName, getMeta, getChildren, isDirectory,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';
// BEGIN (write your solution here)

// VERSION #1

const downcaseFileNames = (tree) => {
  const name = getName(tree);
  const children = _.cloneDeep(getChildren(tree));
  const newMeta = _.cloneDeep(getMeta(tree));
  const newChildren = children.map((child) => {
    const childName = getName(child);
    const lowerCaseChildName = childName.toLowerCase();
    const childMeta = getMeta(child);
    if (isFile(child)) {
      return mkfile(lowerCaseChildName, childMeta);
    }
    return downcaseFileNames(child);
  });
  return mkdir(name, newChildren, newMeta);
};

// VERSION #2

const downcaseFileNames1 = (tree) => {
  const newMeta = _.cloneDeep(getMeta(tree));
  if (isFile(tree)) {
    return mkfile(getName(tree).toLowerCase(), newMeta);
  }
  const children = _.cloneDeep(getChildren(tree));
  const newChildren = children.map(downcaseFileNames1);
  return mkdir(getName(tree), newChildren, newMeta);
};

export { downcaseFileNames, downcaseFileNames1 };

// END

/* downcaseFileNames.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию
(объект-дерево), приводит имена всех файлов в этой и во всех вложенных директориях к
нижнему регистру.Результат в виде обработанной директории возвращается наружу.

Примеры
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import downcaseFileNames from './downcaseFileNames.js';

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

downcaseFileNames(tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'eTc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NgiNx',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'config.json', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'hosts', type: 'file', meta: {}, },
//   ],
// } */
