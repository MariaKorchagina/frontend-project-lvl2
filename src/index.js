import getComparisons from './getComparisons.js';
import formatter from './formatters/getFormat.js';
import getContent from './getContent.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const content1 = getContent(filepath1);
  const content2 = getContent(filepath2);
  const difference = getComparisons(content1, content2);
  const result = formatter(difference, formatName);
  return result;
};

export default genDiff;
