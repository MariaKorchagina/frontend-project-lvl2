import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)){
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (node) => {

};

export default plain;