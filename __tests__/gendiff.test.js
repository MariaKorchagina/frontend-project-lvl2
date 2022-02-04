import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedFile = fs.readFileSync(getFixturePath('../__fixturesExpected__/expected-file.txt'), 'utf-8');
const expectedFileStylish = fs.readFileSync(getFixturePath('../__fixturesExpected__/expected-stylish.txt'), 'utf-8');
const expectedFilePlain = fs.readFileSync(getFixturePath('../__fixturesExpected__/expected-plain.txt'), 'utf-8');
const expectedFileJson = fs.readFileSync(getFixturePath('../__fixturesExpected__/expected-json.txt'), 'utf-8');

test('gendiff', () => {
  expect(genDiff('../frontend-project-lvl2/__fixtures__/file1.json', '../frontend-project-lvl2/__fixtures__/file2.json')).toEqual(expectedFile);
  expect(genDiff('../frontend-project-lvl2/__fixtures__/file1.yaml', '../frontend-project-lvl2/__fixtures__/file2.yaml')).toEqual(expectedFile);
  expect(genDiff('../frontend-project-lvl2/__fixtures__/fileRecursive1.json', '../frontend-project-lvl2/__fixtures__/fileRecursive2.json')).toEqual(expectedFileStylish);
  expect(genDiff('../frontend-project-lvl2/__fixtures__/fileRecursive1.yaml', '../frontend-project-lvl2/__fixtures__/fileRecursive2.yaml')).toEqual(expectedFileStylish);
  expect(genDiff('../frontend-project-lvl2/__fixtures__/fileRecursive1.json', '../frontend-project-lvl2/__fixtures__/fileRecursive2.json', 'plain')).toEqual(expectedFilePlain);
  expect(genDiff('../frontend-project-lvl2/__fixtures__/fileRecursive1.yaml', '../frontend-project-lvl2/__fixtures__/fileRecursive2.yaml', 'plain')).toEqual(expectedFilePlain);
  expect(genDiff('../frontend-project-lvl2/__fixtures__/fileRecursive1.json', '../frontend-project-lvl2/__fixtures__/fileRecursive2.json', 'json')).toEqual(expectedFileJson);
  expect(genDiff('../frontend-project-lvl2/__fixtures__/fileRecursive1.yaml', '../frontend-project-lvl2/__fixtures__/fileRecursive2.yaml', 'json')).toEqual(expectedFileJson);
});
