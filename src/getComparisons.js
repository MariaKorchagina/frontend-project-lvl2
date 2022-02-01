import _ from 'lodash';

const getComparisons = (object1, object2) => {

  const keysFromFile1 = _.keys(object1);
  const keysFromFile2 = _.keys(object2);

  const allKeys = _.union(keysFromFile1, keysFromFile2);

  const sortedKeys = _.sortBy(allKeys);

  return sortedKeys.map((key) => {

    const valueOfObject1 = object1[key];
    const valueOfObject2 = object2[key];

    if (!_.has(object1, key)) {
      return { name: key, type: 'added', value: valueOfObject2 };
    }
    if (!_.has(object2, key)) {
      return { name: key, type: 'deleted', value: valueOfObject1 };
    }
    if (_.isPlainObject(valueOfObject1) && _.isPlainObject(valueOfObject2)) {
      return {
        name: key, type: 'nested', children: getComparisons(valueOfObject1, valueOfObject2),
      };
    }
    if (_.isEqual(valueOfObject1, valueOfObject2)) {
      return {
        name: key, type: 'unchanged', value: valueOfObject1,
      };
    }
    return { name: key, type: 'changed', valueBefore: valueOfObject1, valueAfter: valueOfObject2 };
  });
};

export default getComparisons;
