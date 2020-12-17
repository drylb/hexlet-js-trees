/* eslint-disable no-undef */
// @ts-check

import { removeFirstLevel, removeFirstLevel1 } from '../src/removeFirstLevel';

test('removeFirstLevel1', () => {
  const tree1 = [];
  const result1 = [];
  expect(removeFirstLevel1(tree1)).toEqual(result1);

  const tree2 = [1, 100, 3];
  const result2 = [];
  expect(removeFirstLevel1(tree2)).toEqual(result2);

  const tree3 = [[1, [3, 2]], 2, { a: 1 }, [3, 5], 2];
  const result3 = [1, [3, 2], 3, 5];
  expect(removeFirstLevel1(tree3)).toEqual(result3);

  const tree4 = [3, 2, 1, [3, 3], [4, 5], 0];
  const result4 = [3, 3, 4, 5];
  expect(removeFirstLevel1(tree4)).toEqual(result4);
});

test('removeFirstLevel', () => {
  const tree1 = [];
  const result1 = [];
  expect(removeFirstLevel(tree1)).toEqual(result1);

  const tree2 = [1, 100, 3];
  const result2 = [];
  expect(removeFirstLevel(tree2)).toEqual(result2);

  const tree3 = [[1, [3, 2]], 2, { a: 1 }, [3, 5], 2];
  const result3 = [1, [3, 2], 3, 5];
  expect(removeFirstLevel(tree3)).toEqual(result3);

  const tree4 = [3, 2, 1, [3, 3], [4, 5], 0];
  const result4 = [3, 3, 4, 5];
  expect(removeFirstLevel(tree4)).toEqual(result4);
});
