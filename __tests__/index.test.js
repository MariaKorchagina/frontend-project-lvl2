import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { test } from '@jest/globals';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = fs.readFileSync(getFixturePath('../__fixtures__/expected_json.txt'),'utf-8');

test('genDiff', () => {
    expect(genDiff(`../frontend-project-lvl2/__fixtures__/file1.json`, `../frontend-project-lvl2/__fixtures__/file2.json`)).toEqual(readFile);
  });



