/* eslint-disable no-undef */
// @ts-check

import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import { findFilesByName, findFilesByName1 } from '../src/findFilesByName';

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

test('findFilesByName', () => {
  expect(findFilesByName(tree, 'co')).toEqual([
    '/etc/nginx/nginx.conf',
    '/etc/consul/config.json',
  ]);
});

test('findFilesByName 2', () => {
  expect(findFilesByName(tree, 'toohard')).toEqual([]);
});

test('findFilesByName 3', () => {
  expect(findFilesByName(tree, 'data')).toEqual([
    '/etc/consul/data',
  ]);
});

test('findFilesByName 4', () => {
  expect(findFilesByName1(tree, 'co')).toEqual([
    '/etc/nginx/nginx.conf',
    '/etc/consul/config.json',
  ]);
});

test('findFilesByName 5', () => {
  expect(findFilesByName1(tree, 'toohard')).toEqual([]);
});

test('findFilesByName 6', () => {
  expect(findFilesByName1(tree, 'data')).toEqual([
    '/etc/consul/data',
  ]);
});
