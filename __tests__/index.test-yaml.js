import * as fs from 'fs';
import genDiff from '../src/gendiff.js';

const readFile = fs.readFileSync('C:\\Users\\kobys\\Desktop\\2_project\\frontend-project-lvl2\\__fixturesTests__\\expectedFile.txt', 'utf8');

test('expected-Yaml', () => {
  expect(genDiff(`../frontend-project-lvl2/__fixtures__/file1.yaml`, `../frontend-project-lvl2/__fixtures__/file2.yaml`)).toEqual(readFile);
});
