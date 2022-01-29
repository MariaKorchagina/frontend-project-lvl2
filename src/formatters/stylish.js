import _ from 'lodash';

const indent = ' ';
const indentCount = 4;
const signAdded = '+';
const signDeleted = '-';
const signUnchanged = ' ';

const getDepth = (level) => indentCount * level;
const getIndent = (n) => indent.repeat(n);

const getValue = (value, depth) => {
  if (!_.isPlainObject(value) || value === null) {
    return String(value);
  }

  const keys = _.keys(value);
  const result = keys.map((item) => {

    const getIndentSize2 = getIndent(depth + getDepth(2));
    if (_.isPlainObject(value[item])) {
      return `${getIndentSize2}${item}: ${getValue(value[item], depth + getDepth(1))}`;
    }
    return `${getIndentSize2}${item}: ${value[item]}`;
  });
  const getIndentSize1 = getIndent(depth + getDepth(1))
  return ['{', ...result, `${getIndentSize1}}`].join('\n');
};


const iter = (tree, depth) => {
  const result = tree.map((dataOfItem) => {
    const { name, type, value, valueBefore, valueAfter, children, } = dataOfItem;

    const indentInDepth = getIndent(depth + getDepth(1) - 2)

    switch (type) {
      case 'added':
        return `${indentInDepth}${signAdded} ${name}: ${getValue(value, depth)}`;
      case 'deleted':
        return `${indentInDepth}${signDeleted} ${name}: ${getValue(value, depth)}`;
      case 'unchanged':
        return `${indentInDepth}${signUnchanged} ${name}: ${getValue(value, depth)}`;
      case 'changed':
        return `${indentInDepth}${signDeleted} ${name}: ${getValue(valueBefore, depth)}\n${indentInDepth}+ ${name}: ${getValue(valueAfter, depth)}`;
      case 'nested':
        return `${indentInDepth}${signUnchanged} ${name}: ${iter(children, depth + getDepth(1))}`;
    }
  });

  return ['{', ...result, `${getIndent(depth)}}`].join('\n');
};
const stylish = (data) => iter(data, 0);

export default stylish;