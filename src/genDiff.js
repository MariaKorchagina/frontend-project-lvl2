import _ from 'lodash';
import path from 'path';
import { readFileSync } from 'fs';

// Преобразуем файл JSON в объект
const fileJson = (file) => JSON.parse(readFileSync(path.resolve(file)));
const genDiff = (filepath1, filepath2) => {
  const getObject1 = fileJson(filepath1);
  const getObject2 = fileJson(filepath2);

  // Возвращаем массив ключей
  const keysFromFile1 = Object.keys(getObject1);
  const keysFromFile2 = Object.keys(getObject2);

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
      result[`${operators[0]} ${key}`] = keysFromFile2[key]
    } else if (!_.has(keysFromFile1, key) || _.has(keysFromFile2, key)) {
      result[`${operators[0]} ${key}`] = keysFromFile2[key]
    } else if (_.has(keysFromFile1, key) || !_.has(keysFromFile2, key)) {
      result[`${operators[1]} ${key}`] = keysFromFile1[key]
    }
  }
  result = JSON.stringify(result, null, 2);
  const resultWithoutQuotes = result.replace(/"/g, "");
  return resultWithoutQuotes.replace(/,/g, "");
}


export default genDiff;