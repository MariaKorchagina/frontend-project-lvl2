import _ from 'lodash';

const indentCount = 4;
const signAdded = '+';
const signDeleted = '-';
const signUnchanged = ' ';

const getIndent = (level) => indentCount * level;
const space = (n) => ' '.repeat(n);

const formatValue = (value, indent) => {
  if (!_.isPlainObject(value) || value === null) {
    return String(value);
  }

  const keys = _.keys(value);
  const result = keys.map((item) => {
    const indentSize2 = space(indent + getIndent(2));
    if (_.isPlainObject(value[item])) {
      return `${indentSize2}${item}: ${formatValue(value[item], indent + getIndent(1))}`;
    }
    return `${indentSize2}${item}: ${value[item]}`;
  });
  const indentSize1 = space(indent + getIndent(1));
  return ['{', ...result, `${indentSize1}}`].join('\n');
};

const iter = (tree, indent) => {
  const result = tree.map((dataOfItem) => {
    const { name, type, value } = dataOfItem;
    const indentInDepth = space(indent + getIndent(1) - 2);
    switch (type) {
      case 'added':
        return `${indentInDepth}${signAdded} ${name}: ${formatValue(value, indent)}`;
      case 'deleted':
        return `${indentInDepth}${signDeleted} ${name}: ${formatValue(value, indent)}`;
      case 'unchanged':
        return `${indentInDepth}${signUnchanged} ${name}: ${formatValue(value, indent)}`;
      case 'changed': {
        const { valueBefore, valueAfter } = dataOfItem;
        return `${indentInDepth}${signDeleted} ${name}: ${formatValue(valueBefore, indent)}\n${indentInDepth}+ ${name}: ${formatValue(valueAfter, indent)}`;
      }
      case 'nested': {
        const { children } = dataOfItem;
        return `${indentInDepth}${signUnchanged} ${name}: ${iter(children, indent + getIndent(1))}`;
      }
      default:
        throw Error(`This ${type} format is not allowed`);
    }
  });
  return ['{', ...result, `${space(indent)}}`].join('\n');
};
const stylish = (data) => iter(data, 0);

export default stylish;
