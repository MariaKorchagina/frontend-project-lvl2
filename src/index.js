import getComparisons from './getComparisons.js';
import formatter from './formatters/getFormatted.js';
import getContent from '../utils/getContent.js';
import { writeFileSync } from 'fs';
import parse from '../utils/parsers.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const content1 = getContent(filepath1);
  const content2 = getContent(filepath2);

  const difference = getComparisons(content1, content2);
  const result = formatter(difference, formatName);

  // writeFileSync("C:\\Users\\kobys\\Desktop\\2_project\\frontend-project-lvl2\\__fixturesTests__\\expected-style.txt", result);

  return result;
};

export default genDiff;

