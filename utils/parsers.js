import * as yaml from 'js-yaml';

const parse = (data, formatName) => {
  if (formatName === 'json') {
    return JSON.parse(data);
  }
  if (formatName === 'yaml') {
    return yaml.load(data);
  }
};

export default parse;
