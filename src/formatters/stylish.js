import _ from 'lodash';

const indentCount = 4;
const signAdded = '+';
const signDeleted = '-';
const signUnchanged = ' ';

const getIndent = (level) => indentCount * level;
const indent = (n) => ' '.repeat(n);

const formatValue = (value, depth) => {
  if (!_.isPlainObject(value) || value === null) {
    return String(value);
  }

  const keys = _.keys(value);
  const result = keys.map((item) => {
    const indentSize2 = indent(depth + getIndent(2));
    if (_.isPlainObject(value[item])) {
      return `${indentSize2}${item}: ${formatValue(value[item], depth + getIndent(1))}`;
    }
    return `${indentSize2}${item}: ${value[item]}`;
  });
  const indentSize1 = indent(depth + getIndent(1));
  return ['{', ...result, `${indentSize1}}`].join('\n');
};

const iter = (tree, depth) => {
  const result = tree.map((dataOfItem) => {
    const { name, type, value } = dataOfItem;
    const indentInDepth = indent(depth + getIndent(1) - 2);
    switch (type) {
      case 'added':
        return `${indentInDepth}${signAdded} ${name}: ${formatValue(value, depth)}`;
      case 'deleted':
        return `${indentInDepth}${signDeleted} ${name}: ${formatValue(value, depth)}`;
      case 'unchanged':
        return `${indentInDepth}${signUnchanged} ${name}: ${formatValue(value, depth)}`;
      case 'changed': {
        const { valueBefore, valueAfter } = dataOfItem;
        return `${indentInDepth}${signDeleted} ${name}: ${formatValue(valueBefore, depth)}\n${indentInDepth}+ ${name}: ${formatValue(valueAfter, depth)}`;
      }
      case 'nested': {
        const { children } = dataOfItem;
        return `${indentInDepth}${signUnchanged} ${name}: ${iter(children, depth + getIndent(1))}`;
      }
      default:
        throw Error(`This ${type} format is not allowed`);
    }
  });
  return ['{', ...result, `${indent(depth)}}`].join('\n');
};
const stylish = (data) => iter(data, 0);

export default stylish;
