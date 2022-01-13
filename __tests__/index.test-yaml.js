import * as fs from 'fs';
import genDiff from '../src/gendiff.js';

const readFile = fs.readFileSync('../__fixturesTests__/expectedFile.txt', 'utf8');

test('expected-Yaml', () => {
  expect(genDiff(`../__fixtures__/file1.yaml`, `../__fixtures__/file2.yaml`)).toEqual(readFile);
});
