import * as yaml from 'js-yaml';
import _ from 'lodash';


const parse = (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  if (format === 'yaml') {
    return yaml.load(data);
  }
};

export default parse;

