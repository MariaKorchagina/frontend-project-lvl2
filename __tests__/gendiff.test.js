import fs from 'fs';
import genDiff from '../src/index.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { test } from '@jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedFile = fs.readFileSync(getFixturePath('../__fixturesExpected__/expected-file.txt'), 'utf-8');
const expectedFileStylish = fs.readFileSync(getFixturePath('../__fixturesExpected__/expected-stylish.txt'), 'utf-8');
//const expectedFilePlain = fs.readFileSync(getFixturePath('expected-plain.txt'), 'utf-8');
const expectedFileJson = fs.readFileSync(getFixturePath('../__fixturesExpected__/expected-json.txt'), 'utf-8');

// const data = [
//   ['file1.json', 'file2.json', 'stylish', expectedFile.trim()],
//   ['file1.yaml', 'file2.yaml', 'stylish', expectedFile.trim()],
//   ['fileRecursive1.json', 'fileRecursive2.json', 'stylish', expectedFileStylish.trim()],
//   ['fileRecursive1.yml', 'fileRecursive2.yaml', 'stylish', expectedFileStylish.trim()],
//   //['fileRecursive1.json', 'fileRecursive2.json', 'plain', expectedFilePlain.trim()],
//  // ['fileRecursive1.yml', 'fileRecursive2.yaml', 'plain', expectedFilePlain.trim()],
//   ['fileRecursive1.json', 'fileRecursive2.json', 'json', expectedFileJson.trim()],
//   ['fileRecursive1.yml', 'fileRecursive2.yaml', 'json', expectedFileJson.trim()],
// ];

 test('expectedFileJson', () => {
   expect(genDiff(`../frontend-project-lvl2/__fixtures__/file1.json`, `../frontend-project-lvl2/__fixtures__/file2.json`)).toEqual(expectedFile);
 });

 test('expectedFileYaml', () => {
  expect(genDiff(`../frontend-project-lvl2/__fixtures__/file1.yaml`, `../frontend-project-lvl2/__fixtures__/file2.yaml`)).toEqual(expectedFile);
});
 

 test('expectedFileStylishJson', () => {
  expect(genDiff(`../frontend-project-lvl2/__fixtures__/fileRecursive1.json`, `../frontend-project-lvl2/__fixtures__/fileRecursive2.json`)).toEqual(expectedFileStylish);
});

test('expectedFileStylishYaml', () => {
  expect(genDiff(`../frontend-project-lvl2/__fixtures__/fileRecursive1.yaml`, `../frontend-project-lvl2/__fixtures__/fileRecursive2.yaml`)).toEqual(expectedFileStylish);
});

// test('expectedFileJsonRecursive', () => {
//    expect(genDiff(`../frontend-project-lvl2/__fixtures__/fileRecursive1.json`, `../frontend-project-lvl2/__fixtures__/fileRecursive2.json`)).toEqual(expectedFileJson);
//  });

//  const data = [
//   ['fileRecursive1.json', 'fileRecursive2.json', 'json', expectedFileJson],
//   ['fileRecursive1.yaml', 'fileRecursive2.yaml', 'json', expectedFileJson],
// ];

// test.each(data)('%s and %s %s diff', (filename1, filename2, formatName) => {
//   const filepath1 = getFixturePath(filename1);
//   const filepath2 = getFixturePath(filename2);

//      const actual = genDiff(filepath1, filepath2, formatName);
//   expect(actual).toEqual(expectedFileJson);
// });


// test('should throw an error for unknown formater', () => {
//   expect(() => {
//     const filepath1 = getFixturePath('fileRecursive1.json');
//     const filepath2 = getFixturePath('fileRecursive2.json');

//     genDiff(filepath1, filepath2, 'unknown');
//   }).toThrow("gendiff isn't available in unknown format");
// });

