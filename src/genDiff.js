import _ from 'lodash';
import path from 'path';
import { writeFileSync } from 'fs';
import parseJson from '../parsers/parsers_json.js';
import parseYaml from '../parsers/parsers_yaml.js';

function getKeys(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof obj[key] === 'object') {
      keys.splice(i + 1, 0, getKeys(obj[key]));
      i++;
    }
  }
  return keys;
}

const genDiff = (filepath1, filepath2) => {
  let getObject1 = null;
  let getObject2 = null;
  if ((path.extname(filepath1) === '.json') && (path.extname(filepath2) === '.json')) {
    getObject1 = parseJson(filepath1);
    getObject2 = parseJson(filepath2);

  } else if ((path.extname(filepath1) === '.yaml') && (path.extname(filepath2) === '.yaml')) {
    getObject1 = parseYaml(filepath1);
    getObject2 = parseYaml(filepath2);
  }

  console.log(getObject1)
  // Возвращаем массив ключей
  const keysFromFile1 = getKeys(getObject1);
  console.log(keysFromFile1)
  const keysFromFile2 = getKeys(getObject2);

  //объединяем весь массив
  const allKeys = _.union(keysFromFile1, keysFromFile2);

  //сортировка по умолчанию
  const sortedKeys = _.sortBy(allKeys);
  return getComparisons(getObject1, getObject2, sortedKeys);
}

const operators = ['+', '-', ''];

const getComparisons = (keysFromFile1, keysFromFile2, sortedKeys) => {
  let result = {};
  for (const key of sortedKeys) {
    if (_.has(keysFromFile1, key) && _.has(keysFromFile2, key) && (keysFromFile1[key] === keysFromFile2[key])) {
      result[` ${operators[2]} ${key}`] = keysFromFile1[key];
    } else if (_.has(keysFromFile1, key) && _.has(keysFromFile2, key) && (keysFromFile1[key] !== keysFromFile2[key])) {
      result[`${operators[1]} ${key}`] = keysFromFile1[key];
      result[`${operators[0]} ${key}`] = keysFromFile2[key];
    } else if (!_.has(keysFromFile1, key) || _.has(keysFromFile2, key)) {
      result[`${operators[0]} ${key}`] = keysFromFile2[key]
    } else if (_.has(keysFromFile1, key) || !_.has(keysFromFile2, key)) {
      result[`${operators[1]} ${key}`] = keysFromFile1[key];
    }
  }
  const diffString = JSON.stringify(result, null, 2);
  let resultWithoutQuotes = diffString.replace(/"/g, "");
  resultWithoutQuotes = resultWithoutQuotes.replace(/,/g, "");

  // Запись в файл expected_json.txt
  // writeFileSync("C:\\Users\\kobys\\Desktop\\2_project\\frontend-project-lvl2\\__fixturesTests__\\expectedFile.txt", resultWithoutQuotes);

  //writeFileSync("C:\\Users\\kobys\\Desktop\\2_project\\frontend-project-lvl2\\__fixturesTests__\\expectedadsfsdfsdfRecursiveFile.txt", resultWithoutQuotes);
  return resultWithoutQuotes;
}
export default genDiff;
