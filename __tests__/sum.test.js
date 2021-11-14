// sum.test.js
const { tsExternalModuleReference, exportAllDeclaration } = require('@babel/types');
const {sum} = require('../assets/scripts/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});