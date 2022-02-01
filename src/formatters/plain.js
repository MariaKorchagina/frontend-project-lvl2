import _ from 'lodash';

const getValue = (value) => {
  if (_.isPlainObject(value) && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const iter = (tree, path) => {
  const result = tree.map((dataOfItem) => {
    const {
      name, type, value, valueBefore, valueAfter, children,
    } = dataOfItem;

    const newPath = ([path, name].flat().join('.'));

    switch (type) {
      case 'added':
        return `Property '${newPath}' was added with value: ${getValue(value)}`;
      case 'deleted':
        return `Property '${newPath}' was removed`;
      case 'unchanged':
        return null;
      case 'changed':
        return `Property '${newPath}' was updated. From ${getValue(valueBefore)} to ${getValue(valueAfter)}`;
      case 'nested':
        return iter(children, newPath);
      default:
        throw Error(`This ${type} format is not allowed`);
    }
  });
  return result.filter((string) => string !== null).join('\n');
};

const plain = (data) => iter(data, []);

export default plain;
